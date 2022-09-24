import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       num1:0.00,
       num2:0.00,
        result: ' ',
      };

      this.Calcular = this.Calcular.bind(this)

  }

  Calcular () {
       result = this.state.num1*this.state.num2;

        
          this.setState({result})
}
  render(){
 
    return(
      <View  style={styles.centered} >
        <Text style={ styles.title}>Multiplicação de números</Text>
       
 
        <Cal/>
              
      <TextInput style={styles.input}placeholder="Digite o primeiro numero"onChangeText={ ( n1 ) => 
                  this.setState({num1:n1 } ) } />
      <TextInput style={styles.input}placeholder="Digite o segundo numero"onChangeText={ ( n2) => 
                 this.setState({num2:n2} ) } />

      <Button style={styles.butao}  title="Calcular" onPress={this.Calcular} />

         <Text style={styles.result}>{this.state.result}</Text>


      
      
       
 
      </View>
    )
  }
}
 
class Cal extends Component {
  render(){
    
    let img = 'https://cdn-icons-png.flaticon.com/512/4819/4819812.png';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 300, height:100, padding:150,}}
      />
    )
  }
}
 const styles = StyleSheet.create({
    input:{
    height: 50,
    borderWidth: 2,
    borderColor: '#7D3C98',
    margin: 10,
    fontSize: 20,
    width: 300,
    fontColor:'#F4ECF7',
    backgroundColor:'#C39BD3',
    color:'#D6EAF8',
  },

  centered: {
   
    flex: 1,
    flexDirection: 'column',
    padding: 0.7,
    margin:100,
    justifyContent: "center",
    alignItems: "center",
    color:'#3498DB',
    
  },  
    
  
  title: {
   color:'#3498DB',
    fontSize: 25,
    fontStyle: 'italic' ,
  },

   butao: {  
    flex: 10, 
    padding: 0.7,
    margin: 60,
    padding: 10,
    backgroundColor:'#D7BDE2',
   },

  subtitle: {
     
    fontSize: 14,
    color: "#888",
    

  },
  
  result:{
   fontSize: 35,
   color: "#888",
   fontStyle: 'italic' ,

    }
});
export default App;  
    
      

 


