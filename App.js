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
  StatusBar,
  Slider,
} from 'react-native';

class ColorControl extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return(
            <View style={styles.row}>
                <Text>{this.props.colorName}</Text>
                <Slider onValueChange = { (val) => { 
                    this.props.onValueChange(val);
                     } } value = {this.state.valueofText} style={styles.slider} minimumValue = {0} maximumValue = {255} step = {1} />
                <View>
                    <TextInput value={`${this.props.valueofText}`} underlineColorAndroid = 'transparent' style={styles.textinput} />
                </View>
            </View>
        )
    }
}
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            red: 100,
            green: 150,
            blue: 200,
        }
    }

    onSliderValueChanged = (color) => {
        this.setState(color);
    }

    renderHeader = () => {
        return (
            <View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"

                />
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Color Picker</Text>
                </View>
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
                    <ColorControl colorName="R" valueofText={this.state.red} onValueChange = {(val) => {
                        const currentColor = this.state;
                        const newColor = { ...currentColor, red:val}
                        this.onSliderValueChanged(newColor);
                    }} />
                    <ColorControl colorName="G" valueofText={this.state.blue} onValueChange = {(val) => {
                        const currentColor = this.state;
                        const newColor = { ...currentColor, green:val}
                        this.onSliderValueChanged(newColor);
                    }} />
                    <ColorControl colorName="B" valueofText={this.state.green} onValueChange = {(val) => {
                        const currentColor = this.state;
                        const newColor = { ...currentColor, blue:val}
                        this.onSliderValueChanged(newColor);
                    }} />
                </View>
                <View style={{ flex: 1, backgroundColor: `rgb( ${this.state.red} , ${this.state.green} , ${this.state.blue} )` }}>
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
  row: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
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

