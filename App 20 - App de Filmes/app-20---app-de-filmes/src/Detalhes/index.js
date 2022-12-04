/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Detalhes({voltar, filme}) {

  return (
    <View style={styles.tela}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.sair} onPress={voltar}>
          <Text style={{color: '#FFF', fontSize: 19}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
 container:{
    width: '100%',
    height: '100%',
    backgroundColor: '#181818',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
     opacity:0.9,
  },
  sair:{
    backgroundColor: '#FF731D',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 10,
    alignItems: 'center',
    opacity:0.9,
  },
   titulo:{
    fontSize: 25,
    color: '#FF731D',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  sinopse:{
    fontSize: 20,
    marginBottom: 5,
    color: '#FF731D',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  descricao:{
    marginLeft: 10,
    marginRight: 10,
    fontSize: 25,
    color: '#FF731D',
    textAlign: 'justify',
    fontWeight: 'bold'
  },
});
