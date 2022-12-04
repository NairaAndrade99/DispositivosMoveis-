import React from 'react';
import { View, Text, Image } from 'react-native';
import {style} from '../style';
 
export default function Pessoal() {
 return (
   <View>
        <Text style={[style.fontePrincipal, style.alinhaTexto]}> Bem-Vindos! </Text>
        <Text style={style.fonteTitulo}>Dados Pessoais: </Text>
        <Image
        source={require('../../img/final.jpeg')}
        style={{width: 200, height: 200, alignSelf:'center'}}
        />
        <Text style={style.fonteTexto}>Nome: Carla Suemi Nonaka</Text>
        <Text style={style.fonteTexto}>E-mail: carlasnonaka@gmail.com </Text>
        <Text style={style.fonteTexto}>Tel: (11) 94538-4973</Text>
   </View>
  );
}