import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { data } from "../data/Data";

export const ProductSceen = ({ navigation }) => {
  const [category1, setcategory1] = useState([]);
  const [category2, setcategory2] = useState([]);

  const getProductFromData = () => {
    let category1List = [];
    let category2List = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].Category == "category1") {
        category1List.push(data[index]);
      } else if (data[index].Category == "category2") {
        category2List.push(data[index]);
      }
    }
    setcategory1(category1List);
    setcategory2(category2List);
  };
  useEffect(() => {
    const unsubcribe = navigation.addListener("focus", () => {
      getProductFromData();
    });
    return unsubcribe;
  }, [navigation]);

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity style={{ width: "48%", marginVertical: 14 }}>
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: data.Img }}
            style={{ width: 150, height: 100, margin: 3 }}
          />
        </Card>
        <View>
          <Text variant="titleLarge" style={styles.cardtext}>
            {data.Name}
          </Text>
          {data.Category == "category2" ? null : null}
          <Text>{data.Price}.00 ฿</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor:'#fff8dc'  }}>
<ScrollView>
      <View style={{ padding: 16}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", letterSpacing: 1 }}>
            Category 1
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>SeeAll</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {category1.map((data) => {
            return <ProductCard data={data} key={data.id} />;
          })}
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", letterSpacing: 1 }}>
            Category 2
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>SeeAll</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {category2.map((data) => {
            return <ProductCard data={data} key={data.id} />;
          })}
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cardtext: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 1,
  },
});
