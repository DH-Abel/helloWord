import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet,Text,View,TextInput,Dimensions,TouchableOpacity } from 'react-native';

export default function ButtonGradient(){
return(
    <TouchableOpacity style={styles.container}>
            <LinearGradient 
            // Button Linear Gradient
            colors={['#FF0000', '#fe0000', 'white']}
            start={{x:0, y: 1}}
            end={{x:1, y:0}}
            style={styles.button}>
          
            <Text style={styles.text}>Sign in</Text>
        </LinearGradient>
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    container:{
        width:150
      
    },
   text:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center'
   }, 
   button: {
    height:50,
    width: '90%',
    height: 50,
    textAlign: 'center',
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center'

   }
  });