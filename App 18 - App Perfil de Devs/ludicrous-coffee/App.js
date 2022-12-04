import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import {styles} from './styles';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      git: [],
      user: '',
      imagem: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4',
      buscador: '',
    };
  }

  buscarPerfil = () => {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({git: data});
        this.setState({imagem: this.state.git.avatar_url})
        this.setState({buscador: 'Criado em: ' +this.state.git.created_at+ '\n' +
        'Repositórios: ' +this.state.git.public_repos+ '\n' +
        'Seguidores: ' +this.state.git.followers+ '\n' +
        'Seguindo: ' +this.state.git.following
        });
        
      })
      .catch((erro) => {
        alert('Usuário não existe');
      });
  };
      
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>Buscador de Perfil</Text>

        <View>
        <Image style={styles.image}
            source={{uri: this.state.imagem}}
            />

        </View>

        <View>
          <TextInput style={styles.input}
            defaultValue={this.state.user} placeholder="Digite o login github" onChangeText={(user) => {this.setState({user});}}
          />
          </View>

        <View>
          <Pressable style={styles.button} onPress={() => this.buscarPerfil()}>
            <Text style={styles.textButton}> Buscar </Text>
          </Pressable>
        </View>

        <View>
            <Text style={styles.title}>{this.state.git.name} </Text>
            <Text style={styles.user}>{this.state.git.login}</Text>
        </View>

        <View>
          <Text style={styles.result}>{this.state.buscador} </Text>
        </View>
        
      </View>
    );
  }
}
export default App;
