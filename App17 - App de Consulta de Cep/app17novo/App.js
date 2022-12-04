import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endereco: [],
      cep: '',
      buscador: '',
    };
  }

  buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ endereco: data });
        this.setState({
          buscador:
            'CEP: ' +
            this.state.cep +
            '\n' +
            'Logradouro: ' +
            this.state.endereco.logradouro +
            '\n' +
            'Bairro: ' +
            this.state.endereco.bairro +
            '\n' +
            'Cidade: ' +
            this.state.endereco.localidade +
            '\n' +
            'Estado: ' +
            this.state.endereco.uf,
        });
      })
      .catch((erro) => {
        alert('CEP não encontrado');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('./assets/fundo.jpeg')}>
          <Text style={styles.title}>Consultar CEP</Text>

          <View style={styles.containerinput}>
            <TextInput
              style={styles.input}
              defaultValue={this.state.cep}
              placeholder="Digite o seu CEP"
              keyboardType="numeric"
              onChangeText={(cep) => {
                this.setState({ cep });
              }}
            />

            <TouchableOpacity style={styles.button}>
              <AntDesign
                style={styles.icon}
                name="enviromento"
                size={50}
                color="#EEEEEE"
                onPress={() => this.buscarCep()}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.box}>
            <Text style={styles.result}>{this.state.buscador} </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  box: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 25,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#FFF',
    padding: 18,
    opacity: 0.8,
    borderRadius: 20,
  },
  input: {
    backgroundColor: '#FFF',
    width: 300,
    height: 70,
    borderRadius: 30,
    padding: 18,
    alignSelf: 'center',
    fontSize: 30,
    opacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 30,
    elevation: 3,
  },

  containerinput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: '25%',
  },

  result: {
    fontSize: 25,
    fontWeight: '700',
    flexDirection: 'row',
    color: '#000000',
    margin: 2,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
    color: '#000000',
    marginTop: 60,
  },

  button: {
    backgroundColor: '#020202',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginLeft: 7,

    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 30,
    elevation: 3,
  },

  textButton: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
