import { View, Button, StyleSheet, StatusBar, Text } from "react-native";
import React, { useState } from "react";
import { SignInScreen } from "./account/SignInScreen";
import { List, MD3Colors, Badge, Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export const SettingsScreen = () => {
  return (
    <View style={{ backgroundColor: "#fff8dc" }}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row",margin:5,justifyContent:'space-between'}}>
        <View style={{ alignItems: "flex-start" }}>
          <Avatar.Image
            size={90}
            source={{
              uri: "https://i.pinimg.com/736x/2b/49/1e/2b491e4b1efe6c72f970c55baac6ad9a.jpg",
            }}
          />
        </View>
        <View>
          <Text style={{fontSize:25,fontWeight:'500'}}>UserName</Text>
        </View>
        <View>
          <Text style={{fontSize:25,fontWeight:'500'}}></Text>
        </View>
      </View>
      <View style={styles.vcontainer}>
        <List.Section>
          <List.Subheader>Settings</List.Subheader>
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="Second Item"
            left={() => (
              <List.Icon color={MD3Colors.tertiary70} icon="folder" />
            )}
          />
        </List.Section>
        <Button title="Go to Login" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  vcontainer: {
    margin: 15,
  },
  Ccontainer: {
    margin: 5,
    padding: 30,
    flexDirection: "row",
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fffacd",
  },
});
