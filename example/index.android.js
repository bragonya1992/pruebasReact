import React, { Component } from 'react';
import { Text,AppRegistry, StyleSheet,View } from 'react-native';
import Player from './Player';
export default class VideoPlayer extends Component {
  render() {
    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Player styles={styles}></Player>
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