import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
   <View>
      <Text
        style={styles.container}
        // onPress={() => navigation.navigate('Home')}
      >Detail Screen</Text>
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