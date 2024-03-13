import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import ButtonGradient from './ButtonGradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HELLO</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      <TextInput placeholder='Email' style={styles.inputs}></TextInput>
      <TextInput placeholder='Password' style={styles.inputs}></TextInput>
      <Text style={styles.button}>Forgot Password?</Text>
      <ButtonGradient/>
      <StatusBar style="auto" />
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    fontSize: 100,
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 70,
    color: '#FFFF',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize:30,
    color: 'white'
  },
  inputs:{
    borderWidth: 1,
    fontSize:25,
    color: 'black',
    borderColor: 'white',
    width: '80%',
    padding: 10,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white'

  },
  button: {
    fontSize: 18,
    width: '80%',
    height: 50,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 0,
    height: 35
 
  }
  


});
