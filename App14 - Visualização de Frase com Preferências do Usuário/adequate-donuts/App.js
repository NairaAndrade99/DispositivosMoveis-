import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch} from 'react-native';
import {styles} from './styles';


 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      statusDia: false,
      statusPequeno: false
    };
  }
 
 
  render(){
    return(

      <View style={styles.container}>

        <View>
        <Text style={styles.tituloPrincipal}><b>Textos Inspiradores</b></Text>
        </View>

        <View>
        <Text><b>Dia</b></Text>
                    <Switch 
                    value={this.state.statusDia}
                    onValueChange={ (valorSwitch) => this.setState({statusDia: valorSwitch})}
                    />
        </View>

        <View>
        <Text><b>Pequeno</b></Text>
                      <Switch 
                      value={this.state.statusPequeno}
                      onValueChange={ (valorSwitch) => this.setState({statusPequeno: valorSwitch})}
                      />
        </View>
        
          <Text style={this.state.statusDia ? styles.dia : styles.noite}>
                  <Text style={this.state.statusPequeno ? styles.pequeno : styles.grande}><b>"Por isso não temas, porque estou contigo; não te assustes, porque sou o teu Deus; Eu te fortaleço, ajudo e sustento com a mão direita da minha justiça. Is 41:10"</b></Text>
          </Text>

                  
        
      </View>
    )
  }
};
 
export default App;