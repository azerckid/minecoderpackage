import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { instance } from "../api";
import * as Network from "expo-network";
import axios from "axios";
import CryptoJS from "crypto-js";


 // encription
 var encrypted = CryptoJS.AES.encrypt(
  CryptoJS.enc.Utf8.parse("vericras@kakao.com"),
  CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
  {
    iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
  }
);
const encEmail = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

var encryptedp = CryptoJS.AES.encrypt(
  CryptoJS.enc.Utf8.parse("!1q2w3e4r"),
  CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
  {
    iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
  }
);
const encPassword = encryptedp.ciphertext.toString(CryptoJS.enc.Base64);
// encription End


const sendData = async () => {
  try {
    const ip = await Network.getIpAddressAsync();
    console.log(ip)
    await fetch("http://crm.borabit.com/v2/charge/create_new_charge_address", {
      method: "post",
      mode: "no-cors",
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Auth-Key": "LrMgyJaOG8pYK2PbRoqZvlcXSxWe95wF",
      },
      body: JSON.stringify({
        coin_code: "ddm",
        request:{
        'account' : '',
        'from_address' : '',
        'to_address' : '',
        'amount_ddm' : '',
        'wallet_passphrase' : '3FBDC25C31E2',
        'type' : 'getnewaddress',}
      }),
    }).then((response)=> console.log(response.json()));
    console.log("end fetch")
  } catch (e) {
    console.log(e);
  }
};

const QRgen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [text, setText] = useState("0");
  const [error, setError] = useState("");

  // console.log(text);
  // console.log(typeof text);
  // console.log(address);

  useEffect(() => {
    sendData();
    const fetchData = async () => {
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B");
    };
    fetchData();
  }, [text]);

  let requestedPrice;
  const Numberfy = parseInt(text);
  requestedPrice = Numberfy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let keyboardName =
    Platform.OS === "android" ? "numeric" : "numbers-and-punctuation";

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ededed",
      }}>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: "#3e4a85",
          borderRadius: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}>
          Request Amount
        </Text>
        <TextInput
          style={styles.coinInput}
          placeholder="Please enter the requested amount"
          keyboardType={keyboardName}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingVertical: 40,
          paddingHorizontal: 65,
          marginBottom: 10,
        }}>
        <Text style={{ marginTop: -20, fontSize: 22, textAlign: "center" }}>
          Requested Coin
        </Text>
        <Text style={{ marginBottom: 15, fontSize: 18 }}>
          {requestedPrice} coin
        </Text>
        {address ? (
          <QRCode
            value={address + "|" + text}
            size={200}
            color="#3e4a85"></QRCode>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinInput: {
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#efe8ff",
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default QRgen;
