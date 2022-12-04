import React, { Component } from "react";
import { StyleSheet, View,ImageBackground } from "react-native";

import Moeda from "./src/Moeda";

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
      <ImageBackground  style={styles.image} source={require('/fundo.jpeg')}>
        <Moeda moedaA="USD" moedaB="BRL" />
        <Moeda moedaA="BRL" moedaB="USD" />

         </ImageBackground >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
});