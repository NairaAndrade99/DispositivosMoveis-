import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          instuição: 'Escola Esmeraldo Tarquinio de Campos Filho  ',
          nome: 'Ensino médio completo ',
          descri: 'Termino: Dezembro de 2018 ',
        },

        {
          id: 2,
          instuição: ' Faculdade Tecnologica do Estado de São Paulo ',
          nome: 'Analise e Desenvolvimento de Sistemas ',
          descri: 'Cursando o 5° Ciclo',
          periodo: 'inicio: Agosto de 2020 ',
        },

        {
          id: 3,
          instuição: 'Fundação Bradesco ',
          nome: 'Programação Fundamentos de Lógica de Programação',
          descri: '40 horas ',
          periodo: 'Emitido: Outubro de 2022',
        },

        {
          id: 4,
          instuição: 'Fundação Bradesco',
          nome: 'Programação Ética no Desenvolvimento de Sistemas',
          descri: '16 horas ',
          periodo: 'Emitido: Outubro de 2022',
        },

        {
          id: 5,
          instuição: 'Unieducar - Universidade Corporativa  ',
          nome: 'LGPD - Lei Geral de Proteção de Dados',
          descri: '14 horas',
          periodo: 'Emitido: Agosto de 2022',
        },

        {
          id: 6,
          instuição: 'Oracle Academy ',
          nome: 'Database Design-Oracle Academy',
          descri: '40 horas',
          periodo: 'Emitido: Maio de 2022',
        },
        {
          id: 7,
          instuição: 'Udemy',
          nome: 'Lógica de Programação para Iniciante e Estudantes',
          descri: '40 horas',
          periodo: 'Emitido: Maio de 2022',
        },
        {
          id: 8,
          instuição: 'Scrum Fundamentals Certified',
          nome: 'Scrum Fundamentals Certified',
          descri: '',
          periodo: 'Emitido: Maio de 2021',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
       
          <FlatList
            style={styles.flat}
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Pessoa data={item} />}
          />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  flat: {
    marginTop: 30,
    opacity: 0.9,
    
  },

  container: {
    flex: 6,
    backgroundColor: '#FFCCD2',
    color: '#FDFEFE',
  },
  areaPessoa: {
    fontStyle: 'Montserrat',
    backgroundColor: '#F9F9F9',
    height: 160,
    marginBottom: 35,
    fontSize: 60,
    fontWeight: 600,
  },
  textoPessoa: {
    alignItems:'center',
    color: '#AC7088',
    fontSize: 17,
    fontStyle: 'Montserrat',
    padding: 2,
    fontWeight: 600,
     
  },
});

export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}> {this.props.data.instuição}</Text>
        <Text style={styles.textoPessoa}> {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> {this.props.data.descri} </Text>
        <Text style={styles.textoPessoa}> {this.props.data.periodo} </Text>
      </View>
    );
  }
}
