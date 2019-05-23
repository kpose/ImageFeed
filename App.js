import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

//import Avatar from './components/Avatar';
import AutoRow from './components/AutoRow';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <AutoRow
        fullname = {'Ganihu Jude'}
        linkText = {'40 Comments'}
        onPressLinkText = {() => {
            console.log('Pressed Link');
        }}
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
