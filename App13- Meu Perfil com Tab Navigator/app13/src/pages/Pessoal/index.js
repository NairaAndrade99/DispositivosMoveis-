
import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
 
export default function Home() {
 return (
   <View style={styles.area}>
    <Cal/>
     <Text style={styles.text}>Meu nome é Naira, tenho 23 anos,Brasileira,
       nascida e criada na baixada santista,sou estudande de ADS pela FATEC  </Text>
     
   </View>

  );
}
class Cal extends Component {
  render(){
    
    let img = 'https://media-exp1.licdn.com/dms/image/D4D03AQGwpS1qhEYlAw/profile-displayphoto-shrink_800_800/0/1666982706193?e=1674086400&v=beta&t=M3l9752QUudfG4VunJIwDQYsEPzFuDH5RR5Vtwuiu0o';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 60, height:60, padding:80,borderRadius:75,alignSelf:'center',       marginTop:15,borderColor:'#628395',borderBottomWidth:15}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  area:{
    
    backgroundColor: '#FFF9B6',
    height:'100%',
   width: '100%',
    
  },
    text:{
      marginTop:50,
      textAlign: 'center',
      fontSize:25,
      fontFamily:'Montserrat',
      color: '#628395',
      fontWeight:1000,
      padding:25,
    },
})
