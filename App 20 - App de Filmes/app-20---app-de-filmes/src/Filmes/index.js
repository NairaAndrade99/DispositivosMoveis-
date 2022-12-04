/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Modal} from 'react-native';

import Detalhes from '../Detalhes';

export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.fundo}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image
          style={styles.capa}
          source={{uri: data.foto}}
        />

        <View style={styles.viewButton}>
          <TouchableOpacity
           style={styles.touchableOpacity}
            onPress={() => setVisibleModal(true)}>
            <Text style={styles.textButton}>SINOPSE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Detalhes filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    fundo:{
  backgroundColor: '#181818',

    },
  card: {
    backgroundColor: '#181818',
    margin: 15,
    elevation: 2,
    marginBottom: 30,
  },
  capa:{
    height: 250,
    zIndex: 2,
    borderRadius:25,
  },
  title:{
    padding: 15,
    fontSize: 25,
   textAlign: 'center',
   color:'#FF731D',
   fontWeight: 'bold'
  },
  viewButton:{
    alignItems: 'flex-end',
    marginTop: -55,
    zIndex: 9,
    
    
   
  },
  touchableOpacity:{
    height: 60,
    width: 360,
    backgroundColor: '#FF731D',
    opacity: 0.9,
    padding: 8,
    alignItems: 'center',
    borderRadius:25,
     
    
  },
  textButton:{
    fontSize: 23,
    color: '#FFF',
    textAlign: 'center',
    
  },
});
