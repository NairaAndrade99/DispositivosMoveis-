import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    let nome = 'Naira da Silva Andrade';
    let dadosPessoais ='DADOS PESSOAIS';
    let formacao='FORMAÇÃO';
    let experiencia ='EXPERIENCIA'
    let projeto='PROJETO'
    let git ='https://github.com/NairaAndrade99'
    let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQGcXm1lGS5Azw/profile-displayphoto-shrink_800_800/0/1647968664152?e=1668038400&v=beta&t=oFd71Co6BXzeimiT8DpM_RMhekW8BqU6uxtSrJ0wp-4';
    
    

    return(
      <center><View>
       <center><Image
          source={{ uri: img }}
           style={{ width: 300, height: 300}}
        /></center> 

        <Text>Primeiro APP - 03/09/22 </Text>
        <Text>Aula de Dispositivos Moveis </Text>

        <Text style={{ fontSize: 37 }}>{nome}</Text>
         <br/>
        <Text style={{fontSize: 20}}>{dadosPessoais}</Text>
          <text>23 anos de idade</text>
          <Text>Resido em São Vicente </Text>
          <text>Telefone para contato (13)997-49****</text>
          <a href="https://www.linkedin.com/in/naira-silva-andrade-2b9a9b1b5/"style ={{fontSize:20}}>Linkedin</a>
        
           <br/>
         <Text style ={{fontSize:20}}>{formacao}</Text>
         <text>Ensino médio - completo pela Escola Estadual Esmeraldo Tarquinio de Campos Filho <br/>
               Em formação em Analise e Desenvolvimento de Sistema pela FATEC- Praia Grande </text>
         <br/>

         <Text style ={{fontSize:20}}>{experiencia}</Text>
         <text>Experiencia em vendas como autônoma <br/>
               Em busca de experiencia profissional na áreia de TI </text>
        <br/>
         <Text style ={{fontSize:20}}>{projeto}</Text>
         <a href="https://github.com/NairaAndrade99"style ={{fontSize:20}}>GitHub</a>
 
         
   </View></center>
)


}
}

export default App;
      