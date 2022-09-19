import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TextInput,Button} from 'react-native';
 
class App extends Component{

  constructor(props){
      super(props);
      this.state = {
       
       
        result: ' ',
      };

      this.Num = this.Num.bind(this)

  }

  Num () {

         result = Math.floor(Math.random() * 10)

       this.setState({result})

   }    

  render(){
    return(
          <View  style={styles.centered} >
            <Text style={ styles.title}>Jogo do número aleatório</Text>
          <Posto/>
                  <Text style={ styles.text}>Pense em um Numero de 0 a 10</Text>

          

            <Text style={styles.result}>{this.state.result}</Text>
            
            <Button style={styles.butao} title="Descobrir" onPress={this.Num} />
       
 
      </View>
    )
  }
}
 
class Posto extends Component {
  render(){
    
    let img = 'https://cdn-icons-png.flaticon.com/512/3339/3339137.png';
    
    return(
        
        <Image
        source={{ uri: img }}
        style={{ width: 150, height:60, padding:130,}}
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
    backgroundColor:'#ADD8E6',
    color:'#FFF5EE',
    
  },
  
   text:{
     flex:2,
     width: 300,
    fontSize: 20,
    margin: 15,
    fontStyle: 'italic' ,
    color:'#3CB371',

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
     width: 300,
    fontSize: 22,
    fontStyle: 'italic' ,
    color:'#3CB371',
  },

   butao: {  
     
    flex: 60, 
    padding: 0.7,
    margin: 60,
    padding: 80,
    
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

         
  
 
    


      
      
  