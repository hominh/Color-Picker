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
  TextInput,
  Slider,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Color Picker</Text>
        </View>
        <View style={styles.body}>
            <View style={{ width: 350, height:300, flexDirection: 'column'}}>
                <View style={{ flex: 1,  }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>R</Text>
                        <Slider style={{ width: 200, marginLeft: 5, marginRight: 5 }} />
                        <View>
                            <TextInput value="0" style={{ width: 50, height: 30 , borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingBottom: 5, underlineColorAndroid : 'transparent' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>G</Text>
                        <Slider style={{ width: 200, marginLeft: 5, marginRight: 5 }} />
                        <View>
                            <TextInput value="0" style={{ width: 50, height: 30 , borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingBottom: 5, underlineColorAndroid : 'transparent' }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text>B</Text>
                        <Slider style={{ width: 200, marginLeft: 5, marginRight: 5 }} />
                        <View>
                            <TextInput value="0" style={{ width: 50, height: 30 , borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingBottom: 5, underlineColorAndroid : 'transparent' }} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                </View>
            </View>
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
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',        
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

