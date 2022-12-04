import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },

  image: {
    margin: 20,
    height: 150,
    width: 150,
    borderRadius: 100,
    borderColor: '#00416b',
    borderWidth: 2,
  },

  input:{
    width: 250,
    height: 42,
    borderWidth: 1,
    borderColor: '#00416b',
    fontSize: 16,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },

  result:{
    fontFamily: 'arial',
    fontSize: 18,
    fontWeight: '600',
    flexDirection: 'row',
    color: '#ffff',
    margin: 10,
  },

  title:{
    fontFamily: 'arial',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: '#4169E1',
  },

  user:{
    textAlign: 'center',
    fontSize: 18,
    color: '#bebebe',
    marginBottom: 10,
  },

  button: {
    width: 250,
    height: 36,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#4169E1',
    margin: 10,
  },

  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF'
  },
});

export {styles}
 