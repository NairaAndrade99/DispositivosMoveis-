import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';


export default function Contato() {
  
 return (

   
   <View style={styles.area}>
   <Text style={styles.textoPessoa}>Projetos armazenados no meu repositorio do Github</Text>
     <a  href="https://github.com/NairaAndrade99/DispositivosMoveis-" style={{ alignSelf:'center',marginTop:50}}>
     <Cal/>
     </a>
   
  </View>
  );
}

class Cal extends Component {
  render(){
    
    let img = 'https://cdn-icons-png.flaticon.com/512/1322/1322104.png';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 60, height:60, padding:80,alignSelf:'center',marginTop:25,}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  area:{
    backgroundColor: '#FF9292',
    height:600,
    
  },
  textoPessoa: {
    alignItems:'center',
    color: '#F9F9F9',
    fontSize: 17,
    fontStyle: 'Montserrat',
    padding: 2,
    fontWeight: 600,
     
  },
 
  
})
