import React from "react";
import {
  FlatList,
  Text,
  View,
  ScrollView,
} from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import ProductCard from "./ProductCard";
import { data } from "./Data";

export const ProductList = () => {

  return (
    <View style={{ margin: 5,backgroundColor:'#fff8dc' }}>
      <ScrollView>
        <ImageSlider
          data={[
            {
              img: "https://i.pinimg.com/736x/66/52/3e/66523e3beef483fe8a1e9fb99835b704.jpg",
            },
            {
              img: "https://i.pinimg.com/564x/ef/be/9a/efbe9a36af551910cffeb32cd06efc1a.jpg",
            },
            {
              img: "https://i.pinimg.com/564x/bd/30/f2/bd30f250ff30ce1bc12f4a71648bd483.jpg",
            },
            {
              img: "https://i.pinimg.com/564x/1f/54/cd/1f54cd244cb75128cb2191288d386ee5.jpg",
            },
          ]}
          autoPlay={true}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", letterSpacing: 1 }}>
            Product
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>SeeAll</Text>
        </View>
        <View style={{paddingBottom:60}}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => <ProductCard data={item} />}

        />
        </View>
      </ScrollView>
     
    </View>
  );
};
