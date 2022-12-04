import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import Item from './components/Item';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('products.db');

export default function App() {
  const [nameProduct, setNameProduct] = useState();
  const [amount, setAmount] = useState();

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState();

  const createTables = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nameProduct VARCHAR(20), amount NUMBER);`,
        [],
        (sqlTxn, res) => {
          console.log('Tabela criada com sucesso');
        },
        (error) => {
          console.log('Erro na criação de tabela ' + error.message);
        }
      );
    });
  };

  const insertProduct = () => {
    if (!product) {
      alert('Informe um produto');
      return false;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO products (nameProduct, amount) VALUES (?, ?)`,
        [nameProduct, amount],
        (sqlTxn, res) => {
          console.log(`${nameProduct} Produto adicionado com sucesso!`);
          getProducts();
          setProduct(' ');
        },
        (error) => {
          console.log('Erro ao inserir um Produto ' + error.message);
        }
      );
    });
  };

  const getProducts = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM products ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log('Produtos lidos com sucesso!');
          let len = res.rows.length;
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({
              id: item.id,
              nameProduct: item.nameProduct,
              amount: item.amount,
            });
          }

          setProducts(results);
        },
        (error) => {
          console.log('Erro ao obter Produtos ' + error.message);
        }
      );
    });
  };

  const deleteProducts = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM products WHERE id = ?',
        [id],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log('Results');
            getProducts();
          }
        },
        (error) => {
          console.log('Erro ao excluir um Produto ' + error.message);
        }
      );
    });
  };

  useEffect(() => {
    createTables();
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./fundo.jpeg')}>
        <Text>Lista de Compras</Text>
        <View style={styles.row}>
          <TextInput
            placeholder="QTD"
            value={amount}
            style={styles.gap}
            onChangeText={setAmount}
          />
          <TextInput
            placeholder="Informe um produto"
            value={nameProduct}
            style={styles.gap}
            onChangeText={setNameProduct}
          />
          <TouchableOpacity style={styles.btn} onPress={insertProduct}>
            <Text style={styles.botao}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          style={styles.box}
          renderItem={({ item }) => (
            <Item item={item} deleteItem={() => deleteProducts(item.id)} />
          )}
          key={(p) => p.id}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },

  btn: {
    backgroundColor: '#FFC23C',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginLeft: 7,
    color: '#FCF8E8',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 3,
    shadowRadius: 30,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    margin: 50,
  },
  botao: {
    fontWeight: 'bold',
    color: '#F5EDDC',
  },
  box: {
    alignSelf: 'center',

    backgroundColor: '#F2DF3A',
    opacity: 0.9,
    width: 300,
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  gap: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
    borderColor: '#F2DF3A',
    borderWidth: 2,
    paddingHorizontal: 10,
    backgroundColor: '#F2DF3A',
  },
});
