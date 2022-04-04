import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';

export default function AddProductScreen() {
  return (
   <View style={styles.container}>
      <Text
        style={styles.text}
        // onPress={() => navigation.navigate('Home')}
      >AddProduct Screen</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: '#ffffff'
  }
})