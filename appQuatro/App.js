import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       alcool:0.00,
       gasolina:0.00,
        result: ' ',
      };

      this.Preco = this.Preco.bind(this)

  }

  Preco () {
       result = this.state.alcool/this.state.gasolina;

        if (result < 0.7){
          this.setState({result:"Alcool"})


        }else {
           this.setState({result:"Gasolina"})
        

  }
}
  render(){
 
    return(
      <View  style={styles.centered} >
        <Text style={ styles.title}>Álcool ou Gasolina</Text>
       
 
        <Posto/>
              
      <TextInput style={styles.input}placeholder="Preço do Alcool"onChangeText={ ( al ) => 
                  this.setState({alcool:al } ) } />
      <TextInput style={styles.input}placeholder="Preço da Gasolina"onChangeText={ ( ga) => 
                 this.setState({gasolina:ga } ) } />

      <Button style={styles.butao} title="Calcular" onPress={this.Preco} />

         <Text style={styles.result}>{this.state.result}</Text>


      
      
       
 
      </View>
    )
  }
}
 
class Posto extends Component {
  render(){
    
    let img = 'https://cdn-icons-png.flaticon.com/512/6964/6964951.png';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 300, height:100, padding:100,}}
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
    fontSize: 25,
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
   fontSize: 35,
   color: "#888",
   fontStyle: 'italic' ,

    }
});
export default App;  
    
      

 


