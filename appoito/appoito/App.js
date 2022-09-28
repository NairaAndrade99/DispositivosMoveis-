import React, { Component } from 'react';
import { View, StyleSheet, ScrollView,Text,Image } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>

          <Text style={styles.text}>Anúncios de Moda</Text>
         
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
          <View style={styles.box1}>
           <Text style={styles.nome}>Maria Bonita</Text>
           <Image source={require('./assets/comprar.png')} style={styles.imagem}/>

          </View>

          <View style={styles.box2}>

          <Text style={styles.nome1}>SHOP TOP</Text>
          <Image source={require('./assets/comp.png')} style={styles.imagem}/>
          
          </View>

          <View style={styles.box3}>

          <Text style={styles.nome2}>Mary Lady</Text>
          <Image source={require('./assets/c.png')} style={styles.imagem}/>

          </View>
          <View style={styles.box4}>
          
          <Text style={styles.nome3}>Gabriella Feshon</Text>
            <Image source={require('./assets/loja.png')} style={styles.imagem}/>


          </View>
          
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   
    flex: 1,
    justifyContent: "center",
    marginTop:100,
   
   
   
  },
  imagem:{
   marginTop:30,
   width: 285, 
   height:285,
  
  },
   
   nome:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 35,
    fontFamily :'monospace Arial',
    color:'#696969',

   },
   nome1:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 35,
    fontFamily :'Fatasy' ,
    color:'#DAA520',

   },
   nome2:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 35,
    fontFamily :'serif' ,
    color:'#FFFAFA',

   },
   nome3:{
   
    textAlign: 'center',
    marginTop:20,
    fontSize: 35,
    fontFamily :'Helvetica' ,
    color:'#E0FFFF',

   },

  
    text:{
    textAlign: 'center',
    marginTop:20,
    fontSize: 45,
    fontFamily :'Arial, Helvetica, sans-serif',
    color:'#A9CCE3',
    marginBottom:35,
    },
    
  
  box1:{
    backgroundColor: '#FAEBD7',
    height: 400,
    width: 290,
  },
  box2:{
    backgroundColor: '#FFC0CB',
    height: 400,
    width: 290,
  },
  box3:{
    backgroundColor: '#DB7093',
    height: 400,
    width: 290,
  },
  box4:{
    backgroundColor: '#FF1493',
    height: 400,
    width: 290,
  }
})
 
export default App;
