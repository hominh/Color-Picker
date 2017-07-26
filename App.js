/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Color Picker</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
      height: 65,
      backgroundColor: '#ECEFF1',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'gray',
      shadowOffset: {width: 0, height: 2, },
      shadowOpacity: 0.5,
      elevation: 5,
  },
  textHeader: {
      fontSize: 16,
      ...Platform.select({
         ios: {
            marginTop: 15,
         },
         android: {
            marginTop: 0,
         }
      })
  }
  
});

