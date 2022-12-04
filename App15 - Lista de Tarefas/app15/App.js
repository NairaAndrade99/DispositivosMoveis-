import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Provider as PaperProvider, Appbar, Button, TextInput, Card, Paragraph, Checkbox } from 'react-native-paper';

import Entypo from 'react-native-vector-icons/Ionicons';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [checked, setChecked] = useState(false);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }
 
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;
 
          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
 
            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <Card style={styles.cardTarefa}>
        <View style={styles.itemTarefa}>
          <Paragraph style={styles.textoTarefa}>{item.id}</Paragraph>
          <Paragraph style={styles.textoTarefa}>{item.nome}</Paragraph>
          <Checkbox
            color='#F6FBF4'
            status={checked ? 'checked' : 'unchecked'}
            onPress={(item) => setChecked(!checked)}
          />
        </View>
      </Card>
    );
  };

  useEffect(() => {
    createTables();
    getTarefas();
  }, []);

  return (
    <PaperProvider style={styles.appBar}>
      <View style={styles.appBar}>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Content title="Tarefas" />
        </Appbar.Header>

        <View style={styles.containerTarefa}>
          <TextInput
            placeholder="Insira uma nova tarefa"
            textColor="#F6FBF4"
            activeUnderlineColor="#F6FBF4"
            value={tarefa}
            onChangeText={setTarefa}
            style={styles.campoTarefa}
          />
          <Button onPress={incluirTarefa} style={{justifyContent: "center"}}>
            <Entypo name='chevron-down-circle-outline' size={35} color="#F0EBE3" />
          </Button>
        </View>
        
        <FlatList
          data={tarefas}
          renderItem={renderTarefa}
          key={t => t.id}
        />

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#16213E"
  },
  containerTarefa: {
    margin: 15,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
     width: "70%",
   
      
  },
  campoTarefa: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    opacity:0.7,
      borderRadius: 30, 
      borderBottomLeftRadius:30,
      
  },
  cardTarefa: {
    opacity:0.9,
    backgroundColor: "#FFFFFF",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: 10,
  },
  itemTarefa: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5
  },
  textoTarefa: {
    color: "#100F0F", 
    marginHorizontal: 5,
    size:25,
  }
});

export default App