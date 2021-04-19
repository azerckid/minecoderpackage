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
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: "#3e4a85",
        borderRadius: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: "white",
          textAlign: "center",
          marginTop: 15,
        }}>
        Your Wallet Account
      </Text>
      <View style={{ justifyContent: "flex-start", marginVertical: 20 }}>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
          Total amount :
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
          Order amount :
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
          Withdraw amout :
        </Text>
        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
          LockUp amout :
        </Text>
      </View>
      <TouchableOpacity
        onPress={fetchCopiedText}
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: 15,
        }}>
        <Text style={{ fontSize: 12, paddingTop: 5, color: "white" }}>
          {address}
        </Text>
        <FontAwesome name="copy" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
};
