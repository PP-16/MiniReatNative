import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export const Input = ({
  lable,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
    const [isFocused,setIsFocused] = useState
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.lable}>{lable}</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name={iconName}
          style={{ fontSize: 22, color: "#006400", marginRight: 10 }}
        />
        <TextInput
        autoCorrect={false}
        onFocus={()=>{
            onFocus();
            setIsFocused(true);}}
         style={{ color: "#006400", flex: 1 }} 
         {...props} 
         />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lable: {
    marginVertical: 5,
    fontSize: 14,
    color: "#5f9ea0",
  },
  inputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: "#8fbc8f",
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
    marginHorizontal: 15,
    alignItems: "center",
  },
});
