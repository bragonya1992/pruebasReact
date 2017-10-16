import React, { Component } from 'react';
import { Text,AppRegistry, StyleSheet,View } from 'react-native';
import Player from './Player';
import ToastExample from './ToastExample';
//ToastExample.show('Awesome', ToastExample.SHORT);
export default class VideoPlayer extends Component {
  render() {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Player styles={styles} 
      url={{ uri: 'https://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8', type: 'mpd' }} 
      onRate= {(rate)=>{
        alert('My rate: '+rate, ToastExample.SHORT);
      }}></Player>
      <View style={styles.below}></View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  below: {
    flex: 1.7,
    backgroundColor: 'white',
  },
});
AppRegistry.registerComponent('VideoPlayer', () => VideoPlayer);