import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TouchableOpacity,Image,SafeAreaView} from 'react-native';
 
class App extends Component{

  constructor(props){
    super(props);
    this.state = ({
      contador: 0,
    });
  }
  
    
  Mais(){
    
    this.setState({

      contador: this.state.contador + 1,

    });
    
  
}
  Menos(){
this.setState({

    contador : this.state.contador - 1,

 });
    
  
}        
 
  render(){
    return(
       <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

      <Text style={styles.texto}>{this.state.contador}</Text>

     
        <TouchableOpacity
         onPress={() => this.Mais()}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./assets/mais.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.Menos()}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Image
            source={require('./assets/botao-de-menos.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
       </View>
       </SafeAreaView>
    );
  }
}
     
        


 
const styles = StyleSheet.create({
  container:{
    
    flex: 1,
    padding: 50,
    backgroundColor: '#ADD8E6',

    
 },
   buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    
    
  },
  buttonStyle: {
   alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height:40,
    borderRadius: 45,
    margin: 5,
    
  },
  texto:{
    textAlign: 'center',
    fontSize: 60,
  },
   buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 60,
  },
  
  
})
 
export default App;
