
 import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       peso:0.00,
       altura:0.00,
       result: ' ',
      };

      this.Preco = this.Preco.bind(this)
      
  }

  Preco () {
       result = this.state.peso/(this.state.altura * this.state.altura);

        if (result < 18.5){
          this.setState({result:"Abaixo do Peso"})

        }else if(result > 18.5 && result < 24.9) {
                  this.setState({result:"Peso Normal"})

       } else if(result > 25 && result < 29.9) {
                  this.setState({result:"Sobrepeso"})

       } else if(result > 30 && result < 34.9) {
                  this.setState({result:"Obesidade grau ||"})
                
        } else if(result > 35 && result < 39,9) {
                  this.setState({result:"Obesidade grau ||"})
                
         }else {
                   this.setState({result:"Obesidade grau || ou Morbida"})
                                    
               
    }
        
}
  render(){
 
    return(
      <View  style={styles.centered} >
        <Text style={ styles.title}>Cálculo do IMC</Text>

       
 
        <Imc/>
              
      <TextInput style={styles.input}placeholder="Peso"onChangeText={ ( p ) => 
                  this.setState({peso:p } ) } />
      <TextInput style={styles.input}placeholder="Altura"onChangeText={ ( a) => 
                 this.setState({altura:a } ) } />

      <Button style={styles.butao} title="Verificar" onPress={this.Preco} />

         <Text style={styles.result}>{this.state.result}</Text>


      
      
       
 
      </View>
    )
  }
}
 
class Imc extends Component {
  render(){
    
    let img = 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c33f60b7b3f2b2f7214fd68de1827f1f';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 300, height:200,padding:125,}}
      />
    )
  }
}
 const styles = StyleSheet.create({
    input:{
      
    height: 50,
    borderWidth: 2,
    borderColor: '#87CEFA',
    margin: 10,
    fontSize: 20,
    width: 300,
    color:'#87CEFA',
    
  },

  centered: {
   
    flex: 1,
    flexDirection: 'column',
    padding: 0.7,
    margin:100,
    justifyContent: "center",
    alignItems: "center",
    
  },  
    
  
  title: {
    flex:2,
    fontSize: 16,
    fontStyle: 'italic' ,
  },

   butao: {  
    flex: 10, 
    padding: 0.7,
    margin: 60,
    padding: 10,
   
   },

  subtitle: {
    fontSize: 14,
    color: "#888",

  },
  
  result:{
   fontSize: 25,
   color: "#888",
   fontStyle: 'italic' ,

    }
});
export default App;  