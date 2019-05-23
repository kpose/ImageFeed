import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

//import Avatar from './components/Avatar';
import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <Card  
        fullname={'Ganihu Jude'}
        linkText={'39 comments'}
        onPressLinkText={() => {
          console.log('Pressed link!');
        }}
        image={{ uri: 'http://unsplash.it/600/600'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    
  },
});
