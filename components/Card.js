import { Image, StyleSheet,  View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react'

import AutoRow from './AutoRow';



export default class Card extends React.Component {
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
            const { fullname, image, linkText, onPressLinkText } = this.props;

            return (
                <View>
                    <AutoRow
                        fullname={fullname}
                        linkText= {linkText}
                        onPressLinkText = {onPressLinkText} />


                        <Image style= {styles.image} source={image} />
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