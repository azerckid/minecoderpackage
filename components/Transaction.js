import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ navigation, address }) => {
  return (
    <View
      style={{
        backgroundColor: "#ededed",
        padding: 10,
        justifyContent: "flex-start",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 0,
          backgroundColor: "white",
          borderRadius: 10,
        }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 18 }}>거래내역</Text>
          <Text style={{ fontSize: 13, paddingLeft: 5, paddingTop: 5 }}>
            {address}
          </Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>송금날짜 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>송금금액 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>입금날짜 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>입금금액 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>잔여금액 :</Text>
          <Text style={{ fontSize: 13, paddingLeft: 5, paddingTop: 5 }}>
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    color: "#2b92ff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
