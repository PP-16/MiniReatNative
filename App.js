import 'react-native-gesture-handler';
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SettingsScreen } from "./components/SettingsScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ProductSceen } from "./components/ProductSceen";
import { RegisterScreen } from "./components/account/RegisterScreen";
import { SignInScreen } from "./components/account/SignInScreen";
import { Stack } from './layout/Stack';
import CartScreen from './components/CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#f5f5f5" />
      
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              height: 55,
              position: "absolute",
              bottom: 16,
              right: 16,
              left: 16,
              borderRadius: 30,
              backgroundColor: "#f0e68c",
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Category") {
                iconName = focused ? "list-circle" : "list-circle-outline";
              } else if (route.name === "Me") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: "#5f9ea0",
            tabBarInactiveTintColor: "#006400",
          })}
        >
          <Tab.Screen
            name="Home"
            component={Stack}
            options={{ headerShown: "" }}
          />
          <Tab.Screen
            name="Category"
            component={ProductSceen}
            options={{ headerShown: "" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
