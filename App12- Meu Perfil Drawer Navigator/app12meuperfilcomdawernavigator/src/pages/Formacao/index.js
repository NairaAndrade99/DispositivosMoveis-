import React from 'react';
import { View, Text} from 'react-native';
import {style} from '../style';
 
export default function Formacao() {
 return (
   <View>
     <Text style={style.fonteTitulo}>Formação: </Text>

        <Text style={style.fonteTexto}>Curso: Administração</Text>
        <Text style={style.fonteTexto}>Faculdade Sumaré</Text>
        <Text style={style.fonteTexto}>Término em dez/2017</Text>
      
        <Text style={[style.fonteTexto, style.area]}>Curso: Análise e Desenvolvimento de Sistemas </Text>
        <Text style={style.fonteTexto}>Fatec Praia Grande</Text>
        <Text style={style.fonteTexto}>Previsão de término em Jul/2023</Text>
        </View>
  );
}
