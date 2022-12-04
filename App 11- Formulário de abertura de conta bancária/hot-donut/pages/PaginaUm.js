import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text,TextInput,Button,Picker,TouchableOpacity}
 from 'react-native';

const PaginaUm = ({ navigation }) => {
  const [Nome, setName,] = useState('');
  const [Idade, setIdade,] = useState('');
  const [Sexo, setSexo,] = useState('');
  const [Escolariedade, setEscolariedade,] = useState('');
  const [Limite, setLimite,] = useState('');
  const [Nacionalidade, setNacionalidade,] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       
        <Text style={styles.heading}>Abertura de Conta </Text>
        <Text style={styles.textStyle}>Cadastar Nome :</Text>
        
          
        <TextInput value={Nome}onChangeText={(Nome) => setName(Nome)}placeholder={'Nome'}style={styles.inputStyle}/>

        <Text style={styles.texto}>Cadastrar idade : </Text>
          
        <TextInput value={Idade} onChangeText={(Idade) => setIdade(Idade)}placeholder={'idade'}style={styles.inputStyle}/>

        <Text style={styles.textStyle}> Sexo :</Text>
         
        <TextInput value={Sexo} onChangeText={(sexo) => setSexo(sexo)} placeholder={'Sexo'} style={styles.inputStyle} />

        

        <Text style={styles.texto}>Cadastre sua Escolariedade </Text>
        <TextInput value={Escolariedade} onChangeText={(escolariedade) => setEscolariedade(escolariedade)}placeholder={'Escolaridade'}
          style={styles.inputStyle} />

        <Text style={styles.texto}>Cadastre seu limite</Text>
        <TextInput value={Limite} onChangeText={(limite) => setLimite(limite)}placeholder={ 'limite'}style={styles.inputStyle}/>

        <Text style={styles.texto}>Cadastre sua Nacionalidade</Text>
        <TextInput value={Nacionalidade}onChangeText={(nacionalidade) => setNacionalidade(nacionalidade)}placeholder={'Nascionalidade'}
          style={styles.inputStyle} />

          <TouchableOpacity style={styles.botao} 
           title="Abrir conta"
           onPress={() =>
            navigation.navigate('PaginaDois', {
              c1: Nome,
              c2: Idade,
              c3: Sexo,
              c4: Escolariedade,
              c5: Limite,
              c6: Nacionalidade,
            })
          }
       > 
         <Text style={styles.textbutton}>Cadatrar</Text>
       </TouchableOpacity>
          
      

        
      </View>
    </SafeAreaView>
  );
};

export default PaginaUm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding:10,
    backgroundColor: '#F1F6F9', 
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  texto: {
   
    fontSize: 18,
    marginVertical: 10,
  },
  inputStyle:  {
    width: '100%',
    height: 50,
    padding: 10,
    marginVertical: 2,
    backgroundColor: '#D8E3E7',
     opacity: 0.4,
     borderRadius:15,
     
    
  },
   
  botao: {
     height: 50,
    width: '60%',
     marginTop:25,
     padding: 10,
     borderRadius:25,
     backgroundColor: '#7267CB',
       alignSelf: 'center',
   
  },
  textbutton:{
      color: '#F5F2F5',
      fontWeight: "bold",
      fontSize: 20,
      textAlign: 'center',
  },
});