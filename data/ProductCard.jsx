import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import { DetailsScreen } from "../components/DetailsScreen";
import { Rate } from "../components/litlecomponent/Rate";

export default function ProductCard({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  function startAddGoalHandler() {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <Card style={styles.card} onPress={startAddGoalHandler}>
      {data.isAvaliable ? (
        <View style={[styles.viewAmount,{backgroundColor: "#8fbc8f"}]}>
          <Text>{data.Amount}</Text>
        </View>
      ) : (
        <View style={[styles.viewAmount,{backgroundColor: "#e9967a"}]}>
          <Text>{data.Amount}</Text>
        </View>
      )}
        <Card.Cover source={{ uri: data.Img }} />
        <View style={{ alignItems:'center',marginTop:2}}>
          <Text style={{fontSize:15,fontWeight:'400' }}>
            {data.Name}
          </Text>
          <Rate value={data.Rate} size={15} ></Rate>
        </View>
        {data.isAvaliable ? (
        modalVisible && (
          <DetailsScreen
            visible={modalVisible}
            onCancel={startAddGoalHandler}
            data={data}
          />
        )
      ) : null}
       
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 3,
    marginTop: 10,
    flex: 1,
  },
  cardtext: {
    alignItems: "center",
    margin: 50,
  },
  viewAmount: {
    position: "absolute",
    width: "20%",
    height: "14%",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
});
