import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen } from '../components/account/RegisterScreen';
import { SignInScreen } from '../components/account/SignInScreen';
import { HomeScreen } from '../components/HomeScreen';
import CartScreen from '../components/CartScreen';
import { DetailsScreen } from '../components/DetailsScreen';



const stack = createStackNavigator();

export const Stack = () => {
  return (
    <stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown:""}}>
    <stack.Screen name="Homey" component={HomeScreen} />
    <stack.Screen name="Register" component={RegisterScreen} />
    <stack.Screen name="SignIn" component={SignInScreen} />
    <stack.Screen name="Detail" component={DetailsScreen} />
    <stack.Screen name="Cart" component={CartScreen} />

  </stack.Navigator>
  )
}

