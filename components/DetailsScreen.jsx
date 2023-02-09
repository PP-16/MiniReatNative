import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React, { useState } from "react";
import { Card, Badge } from "react-native-paper";
import { ImageSlider } from "react-native-image-slider-banner";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import { Rate } from "./litlecomponent/Rate";
import { Review } from "./litlecomponent/Review";
import CartScreen from "./CartScreen";
import {UseOrientation} from "./litlecomponent/UseOrientation";

export const DetailsScreen = ({ data, visible, onCancel}) => {
  
  const orientatin = UseOrientation()
  const WindowWidth = orientatin.width
console.log(WindowWidth)

  const { Img, Img2, Img3, Img4 } = data;
  const [modal, setModal] = useState(false);
  function CartHandler() {
    setModal(!modal);
  }
  const [product,setProduct]= useState(0);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Sorry Product Sold!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50,
    );
  };
  const [qulity,setQulity ]= useState(0);
  const handlequlity =()=>{
    if(qulity>=data.Amount){
      qulity==data.Amount
      showToastWithGravityAndOffset()
    }
    else{
      setQulity (qulity + 1)
      setProduct(data.id)
    }
  }
  return (
    <Modal animationType="fade" visible={visible}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={30}
          color="#3cb371"
          onPress={onCancel}
          style={{marginTop: 10}}
        />
        <TouchableOpacity onPress={CartHandler}>
          <Badge style={{ marginTop: -10, marginLeft: 20 ,backgroundColor:'#fa8072'}}size={25}>
            <Text style={{color:'#f5f5f5'}} >{qulity}</Text>
          </Badge>
          <FontAwesome name="shopping-basket" size={25} color="#3cb371" />
        </TouchableOpacity>
        {modal&&(<CartScreen visible={modal}  id={product} back={CartHandler} qulity={qulity}/>)}
      </View>
      <ScrollView>
        <View style={{ backgroundColor: "#fff8dc" }}>
          <View style={styles.card}>
            <View
              style={{
                width:WindowWidth,
                borderRadius: 15,
              }}
            >
              <ImageSlider
                data={[
                  { img: Img },
                  { img: Img2 },
                  { img: Img3 },
                  { img: Img4 },
                ]}
                autoPlay={false}
                closeIconColor="#fff"
                
              />
            </View>
            <Text style={styles.cardtext}>{data.Name}</Text>
            <Text style={{ fontSize: 20 }}>{data.Description} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{ fontSize: 25 }}>{data.Price}.00 ฿</Text>
              <NumericInput
              value={qulity }
               totalWidth={140}
               totalHeight={40}
                rounded
                maxValue={data.Amount}
                minValue={1}
                rightButtonBackgroundColor='#fff8dc' 
                leftButtonBackgroundColor='#fff8dc'
                iconStyle={{ color: '#8fbc8f' }} 
              />
              
            </View>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
           <Rate value={data.Rate} size={20}/>
            <Text style={{ fontSize: 20 }}>{data.Rate} </Text>
           </View>
           <Review/>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fffacd",
          width:WindowWidth,
          justifyContent:'space-between',
          alignContent:'center'
        }}
      >
        <TouchableOpacity style={{alignItems:'flex-start', justifyContent:'center',marginLeft:20}}>
          <FontAwesome
            name="wechat"
            size={30}
            color="#3cb371"
            style={{ marginHorizontal: 10 }}
          />
           <Text style={{color:"#3cb371"}}>Chat Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlequlity} style={{alignItems:'center',  justifyContent:'center'}}>
          <FontAwesome
            name="cart-plus"
            size={30}
            color="#3cb371"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{color:"#3cb371"}}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'#3cb371',padding:20,alignItems:'flex-end',justifyContent:'center'}}>
          <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "right"}}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fffacd",
  },
  card: {
    margin: 15,
    justifyContent: "center",
  },
  cardtext: {
    textAlign: "center",
    fontSize: 30,
  },
  img: {
    width: 15,
    height: 15,
  },
});
