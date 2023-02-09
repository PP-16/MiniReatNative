import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export const Rate = ({ value,size }) => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      <FontAwesome
        name={
          value >= 1 ? "star": 
          value >= 0.5 ? "star-half-o" : "star-o"
        }
        size={size}
        color="#ffa500"
      />
            <FontAwesome
        name={
          value >= 2 ? "star": 
          value >= 1.5 ? "star-half-o" : "star-o"
        }
        size={size}
        color="#ffa500"
      />
            <FontAwesome
        name={
          value >= 3 ? "star": 
          value >= 2.5 ? "star-half-o" : "star-o"
        }
        size={size}
        color="#ffa500"
      />
            <FontAwesome
        name={
          value >= 4 ? "star": 
          value >= 3.5 ? "star-half-o" : "star-o"
        }
        size={size}
        color="#ffa500"
      />
                 <FontAwesome
        name={
          value >= 5 ? "star": 
          value >= 4.5 ? "star-half-o" : "star-o"
        }
        size={size}
        color="#ffa500"
      />
    </View>
  );
};
