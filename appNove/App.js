import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text,Image } from 'react-native';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Desenvolvimento de Sistemas ', 
                salario: '10 mil',
                descri:'Perfil:Profissional dedicado na carreira de engenharia de software com experiência em desenvolvimento , incluindo design patterns de orientação a objeto (Gof) ', 
                cont: 'joseffe@gmail.com'
        },

        {id: 2, nome: 'Engenharia de dados ', 
                salario: '6 mil',
                descri:'Desafio: Atuar em projetos para transformar dados brutos em ambientes de dados refinados com experiência em projetos de estruturação de pipelines de dados em ambiente de datalake', 
                cont: 'joao@gmail.com'
        },
        
        {id: 3, nome: 'Analista de Sistemas ',
                salario: '30 mil',
                descri:'documentação técnica, liderar projetos de implantação de software, suporte a usuários;Vivência com suporte de sistemas suporte a usuários;Desejável experiência mínima de 1 ano, em implantação', 
                cont: 'maria@gmail.com'
        },

        {id: 4, nome: 'Segurança da informação',
                salario: '25 mil',
                descri:'Administra ambientes computacionais e participa na definição da arquitetura tecnológica para segurança da informação. Analisa sistemas, levanta vulnerabilidades..',                                                    
                cont: 'joaquim@gmail.com'
       
       },

        {id: 5, nome: 'Analista de Infraestrutura Cloud ', 
                salario:'25 mil',
                descri:'Microsoft Azure e suas Features;• Experiência com administração e criação de infraestrutura em nuvem , com foco em Microsoft Azure', 
                cont: 'paulo@gmail.com'},
      ]
    }
  }
 
  render(){
    return(

     
      <View style={styles.container}>
      
       <Text style={styles.text}>Vagas</Text>
       <Posto/>
        
       
       
        <FlatList 
        style={styles.flat}
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
        
      </View>
    )
  }
}
 
const styles = StyleSheet.create({

  text:{
    textAlign: 'center',
    marginTop:25,
    fontSize: 60,
    fontFamily :'monospace' ,
    color:'#A9CCE3',
    
     
  },
  imagem:{
    
   marginTop:30,
   width: 150, 
   height:150,

  },
  flat:{
  marginTop:30,

  },
  
  container:{
   flex: 6,
   backgroundColor: '#FDFEFE',
   color:'#FDFEFE',
    
   
     },
  areaPessoa:{
    fontStyle: 'italic' ,
    backgroundColor: '#A9CCE3',
    height: 200,
    marginBottom:10 ,
    fontSize: 60,
  },
  textoPessoa:{
    color: '#2F4F4F',
    fontSize: 17,
    fontStyle: 'italic' ,
    padding:3,
    
  },
    
 
})
 
export default App;
 class Posto extends Component {
  render(){
    
    let img = 'https://cdn-icons-png.flaticon.com/512/6182/6182907.png';
    
    return(
        
        <Image

        source={{ uri: img }}
        style={styles.imagem}
      />
    )
  }
}
class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        
        <Text style={styles.textoPessoa}>            {this.props.data.nome}    </Text>
        <Text style={styles.textoPessoa}> Salário:$  {this.props.data.salario} </Text>
        <Text style={styles.textoPessoa}>Descrição:  {this.props.data.descri}  </Text>
        <Text style={styles.textoPessoa}>Contato:   {this.props.data.cont}    </Text>
      </View>
    );
  }
}
