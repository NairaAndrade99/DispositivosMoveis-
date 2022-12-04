import React from 'react';
import { View, Text } from 'react-native';
import {style} from '../style';
 
export default function Experiencia() {
 return (
    <View>
        <Text style={style.fonteTitulo}>Experiência: </Text>
        <Text style={style.fonteTexto}>Empresa: MODALGR </Text>
        <Text style={style.fonteTexto}>Cargo: Estágio em Negócios</Text>
        <Text style={style.fonteTexto}>Desde Dez/2021</Text>
  
        <Text style={[style.fonteTexto, style.area]}>Empresa: IAMSPE </Text>
        <Text style={style.fonteTexto}>Cargo: Oficial Administrativo</Text>
        <Text style={style.fonteTexto}>Desde Abr/2014</Text>
    </View>
  );
}
