import { View, Text } from "react-native";
import React from "react";
import { Rate } from "./Rate";
import { FontAwesome } from "@expo/vector-icons";

export const Review = () => {
  return (
    <View style={{ margin: 10, marginTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 9,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center" }}>
          Review
        </Text>
        <FontAwesome name="pencil" size={24} color="black" />
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#ffdab9",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 9,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "500" }}>User 6</Text>
          <Rate value={4} size={15} />
        </View>
        <View
          style={{ padding: 10, backgroundColor: "#fff5ee", borderRadius: 10,marginBottom:5 }}
        >
          <Text>Good</Text>
        </View>
        <Text style={{ marginBottom: 5, textAlign: "right" }}>10 Fab 2023</Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#ffdab9",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 9,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "500" }}>User 3</Text>
          <Rate value={2.5} size={15} />
        </View>
        <View
          style={{ padding: 10, backgroundColor: "#fff5ee", borderRadius: 10,marginBottom:5 }}
        >
          <Text>ภาวนาไปก่อน สาธุ 99</Text>
        </View>
        <Text style={{ marginBottom: 5, textAlign: "right" }}>10 Fab 2023</Text>
      </View>
    </View>
  );
};
