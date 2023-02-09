import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import { data } from "../data/Data";

const CartScreen = ({ id, visible, back, qulity }) => {
  console.log(data);
  const checkout = () => {
    Alert.alert("Are you sure ","Do you want to pay now ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: (back)  },
    ]);
    
  };
  return (
    <Modal visible={visible}>
      <View
        style={{
          backgroundColor: "#fffacd",
          padding: 10,
          flexDirection: "row",
          alignItems:'center',
          alignContent:'center'
        }}
      >
        <Ionicons
          name="arrow-back-circle-outline"
          size={30}
          color="#3cb371"
          onPress={back}
          style={{ marginTop: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "800" ,marginLeft:100}}>Detai Order</Text>
      </View>
      {data.map(
        (item) =>
          item.id == id && (
            <View style={{ backgroundColor: "#fff8dc", flex: 1 }}>
              <ScrollView>
                <View
                  style={{
                    borderRadius: 30,
                    backgroundColor: "#ffe4b5",
                    padding: 20,
                    margin: 10,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: item.Img }}
                    style={{
                      width: 150,
                      height: 100,
                      alignItems: "flex-start",
                    }}
                  />
                  <View style={{ marginLeft: 35 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "600",
                        textAlign: "center",
                        marginBottom: 5,
                      }}
                    >
                      {item.Name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        textAlign: "auto",
                        marginBottom: 5,
                        marginTop: 5,
                      }}
                    >
                      Amount : {qulity}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        textAlign: "auto",
                        marginBottom: 5,
                      }}
                    >
                      Price : {item.Price}.00 ฿
                    </Text>

                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "400",
                        textAlign: "auto",
                        marginBottom: 5,
                      }}
                    >
                      Total Price : {item.Price * qulity}.00 ฿
                    </Text>
                  </View>
                </View>
              </ScrollView>
              <View style={{ backgroundColor: "#fffacd", padding: 30 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#3cb371",
                    padding: 15,
                    borderRadius: 30,
                    alignContent: "center",
                  }}
                  onPress={checkout}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    Check Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
      )}
    </Modal>
  );
};

export default CartScreen;
