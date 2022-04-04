import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';

export default function HomeScreen() {
  return (
   <View>
      <Text
        style={styles.container}
        onPress={() => Alert.alert('Home!!')}
      >Home Screen</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})