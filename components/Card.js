import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react'

import AutoRow from './AutoRow';



export default class Card extends React.Component {

    state = {
        loading: true,
    };

    handleLoad = () => {
        this.setState({ loading: false});
    };

    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func,
    };

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => {},
        };

        render() {
            const { fullname, image, linkText, onPressLinkText,} = this.props;
            const { loading } = this.state;

            return (
                <View>
                    <AutoRow
                        fullname={fullname}
                        linkText= {linkText}
                        onPressLinkText = {onPressLinkText} />

                        <View style = {styles.image}>
                            {loading &&  (
                                <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
                                
                            )}      
                                                                
                        <Image 
                            style= {styles.absoluteFill} 
                            source={image}  
                            onload = {this.handleLoad}
                        />
                    </View>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
    },
    });