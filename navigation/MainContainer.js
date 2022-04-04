import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AddProductScreen from './screens/AddProductScreen';
import CheckingScreen from './screens/CheckingScreen';
import PaymentScreen from './screens/PaymentScreen';
import BorrowScreen from './screens/BorrowScreen';

const Tab = createBottomTabNavigator();

export default function mainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="資産運用" component={AddProductScreen} />
        <Tab.Screen name="決済口座" component={CheckingScreen} />
        <Tab.Screen name="入金" component={PaymentScreen} />
        <Tab.Screen name="借入" component={BorrowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}