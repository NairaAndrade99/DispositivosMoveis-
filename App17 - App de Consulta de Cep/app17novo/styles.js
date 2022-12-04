import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },

  image:{
    width: 250, 
    height: 450,
    margin: 20,
    borderRadius: 5,
  },

  input:{
    width: 250,
    height: 42,
    borderWidth: 1,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },

  result:{
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'row',
    color: '#000000',
    margin: 10,
  },

  title:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
    color: '#00416b',
  },

  button: {
    width: 80,
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#a52a2a',
    margin: 10,
  },

  textButton: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white' 
  },
});

export {styles}
 