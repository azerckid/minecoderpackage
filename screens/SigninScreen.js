import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Input, Text } from "react-native-elements";
import CryptoJS from "crypto-js";
import * as Network from "expo-network";
import * as Device from 'expo-device';
import fetch from "node-fetch";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("vericras@kakao.com");
  const [password, setPassword] = useState("!1q2w3e4r");
  const [error, setError] = useState("");

  // encription
  var encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(email),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  const encEmail = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  console.log("encEmail", encEmail);

  var encryptedp = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(password),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  const encPassword = encryptedp.ciphertext.toString(CryptoJS.enc.Base64);
  console.log("encPassword", encPassword);
  // encription End
  // decription
  var decryptede = CryptoJS.AES.decrypt(
    encrypted.ciphertext.toString(CryptoJS.enc.Base64),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  console.log(decryptede.toString(CryptoJS.enc.Utf8));

  var decryptedp = CryptoJS.AES.decrypt(
    encryptedp.ciphertext.toString(CryptoJS.enc.Base64),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  console.log(decryptedp.toString(CryptoJS.enc.Utf8));
  // decription End


  const sendData = async () => { 
    const ip = await Network.getIpAddressAsync(); 
    const device_info = Device.osName;
    console.log(ip)
    console.log("device_info",device_info)
    const url = "http://crm.borabit.com/v1/user/get_user_info_login";
    console.log("before success");
    const requestOptions={
        email: encEmail,
        password: encPassword,
        device_ip:ip
      }

    fetch(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Auth-Key": "LrMgyJaOG8pYK2PbRoqZvlcXSxWe95wF",
        },
      body: JSON.stringify(requestOptions),
      })
      .then((res) => console.log("login....", res.ok, typeof res, JSON.stringify(res)))
      .then((data) => console.log("login..............", data))
      .catch((err) => console.error("error:" + err));
////////////////////////////////////////////////////////////////////
    const upurl = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
    const options = { method: "GET" };
    fetch(upurl, options)
    .then((res) => res.json())
    .then((json) => console.log("json..............", json))
    .catch((err) => console.error("error:" + err));
///////////////////////////////////////////////////////////////////
    fetch("https://webhook.site/bfef764a-08c9-4678-b1bb-67458dbebc1d", {
      method: "post",
      mode: "no-cors",
      Headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: "address1234567890",
        coinNumber: "9999999",
      }),
    }).then((res) => console.log("test",res.ok, JSON.stringify(res)))
    .catch((err) => console.error("error:" + err));

    console.log("after success")
  };

  const signIn = async () => {
    try {
      sendData();
      navigation.navigate("Tabs");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/ddmcoin.png")} />
      <Input
        // label="Email"
        value={email}
        placeholder="email"
        onChangeText={setEmail}
        // inputContainerStyle={{ borderBottomWidth: 0 }}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          paddingLeft: 10,
        }}
      />
      <Input
        // label="Password"
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          paddingLeft: 10,
        }}
        secureTextEntry
      />

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <TouchableOpacity onPress={() => signIn()}>
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ marginTop: 20 }}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text style={{ marginTop: 20 }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#ff8ac2",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#e3e3e3",
    color: "#b0b0b0",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 70,
  },
});

export default SigninScreen;
