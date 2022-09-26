// import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Component } from "react";



export default class App extends Component{
  state = {count : 0};

  incrementCount(){
    this.setState({
      count: this.state.count+1
    });
  }

  decrementCount(){
    this.setState({
      count: this.state.count-1
    });
  }

  
  render(){
    const {count} =this.state
    return(
      <View style = {styles.container}>
        <Button title="INCREMENT"
        onPress={()=> this.incrementCount()}>
        </Button>
        <Text>{count}</Text>
        <Button title="DECREMENT"
        onPress={()=> this.decrementCount()}>
        </Button> 
        {/* <StatusBar style= "auto"></StatusBar> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'skyblue',
    alignitems : 'center',
    justifyContent : 'center'
  }
})