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

class ColorControl extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return(
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.state.title}</Text>
                <Slider onValueChange = { (val) => { 
                    this.setState({value: val});
                     } } value = {this.state.value} style={styles.slider} minimumValue = {0} maximumValue = {255} step = {1} />
                <View>
                    <TextInput value={`${this.state.value}`} underlineColorAndroid = 'transparent' style={styles.textinput} />
                </View>
            </View>
        )
    }
}
export default class App extends Component {
    renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.textHeader}>Color Picker</Text>
            </View>
        )
    }
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.body}>
            <View style={{ width: 350, height:300, flexDirection: 'column'}}>
                <View style={{ flex: 1,  }}>
                    <ColorControl title="R" value={100} />
                    <ColorControl title="G" value={150} />
                    <ColorControl title="B" value={200} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }}>
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
  slider: {
    width: 200, 
    marginLeft: 5, 
    marginRight: 5
  },
  textinput: {
    width: 50, 
    height: 30 , 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 5, 
    paddingBottom: 5,
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

