import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Clipboard } from "react-native";

export default ({ navigation, address }) => {
  const [copiedText, setCopiedText] = useState("");

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    alert(copiedText);
  };
  return (
    <View
      style={{
        height:64,
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: -40,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DADADA',
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.8,
        shadowRadius: 90,
        elevation: 8,
      }}>
      <View style={{ flexDirection:"row", justifyContent: "center", alignItems:"center" }}>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          성함
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          아이디
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          회원직급
        </Text>
      </View>
      <View style={{ flexDirection:"row", justifyContent: "center", alignItems:"center" }}>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          성함
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          아이디
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "black" }}>
          회원직급
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  t: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 3, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
});
