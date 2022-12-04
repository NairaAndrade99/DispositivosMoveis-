import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const PaginaDois = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}> Meus dados da conta </Text>
       
        <Text style={styles.textStyle}> Nome cadastrado: {route.params.c1}</Text>
        <Text style={styles.textStyle}>Idade: {route.params.c2}</Text>
        <Text style={styles.textStyle}>Sexo: {route.params.c3}</Text>
        <Text style={styles.textStyle}>Escolaridade: {route.params.c4}</Text>
        <Text style={styles.textStyle}>Limite: {route.params.c5}</Text>
        <Text style={styles.textStyle}> Brasileiro: {route.params.c6}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PaginaDois;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
  },
});