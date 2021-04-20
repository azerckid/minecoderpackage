import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Clipboard } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from "@expo/vector-icons";
import { instance } from "../../api";
import * as React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horiziontal";
import ScrollContainer from "../../components/ScrollContainer";
import Transaction from "../../components/Transaction";
import AddressCard from "../../components/AddressCard";
import fetch from "node-fetch";
import Dount from "../../components/DonutChart"
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

const data =[
  {
    percentage:90,
    color:"#3e4a85",
    max:100,
    // radius:150,
    strokeWidth: 10
    },
  {
  percentage:8,
  color:"tomato",
  max:10,
  },
  {
  percentage:14,
  color:"skyblue",
  max:20,
  },
  {
  percentage:92,
  color:"gold",
  max:100,
  },
  
]


const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 9}px;
  margin-bottom: 5px;
  margin-top: 1px;
`;

const Container = styled.View``;

// const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
// const options = { method: "GET" };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log("json..............", json))
//   .catch((err) => console.error("error:" + err));

const fetchCopiedText = async () => {
  const text = await Clipboard.getString();
  setCopiedText(text);
  alert(copiedText);
};

export default ({ refreshFn, loading, nowPlaying, navigation }) => {
  const [address, setAddress] = useState("");
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B");
    };
    fetchData();
  }, [address]);

  return (
    <ScrollContainer
      refreshFn={refreshFn}
      vertical
      style={{
        backgroundColor: "#3e4a85",
      }}
      contentContainerStyle={{
        justifyContent: loading ? "center" : "flex-start",
      }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.headBackcontainer} >
            <LinearGradient
              // Background Linear Gradient
              colors={['#4568DC', 'transparent']}
              start={[1,0.5]}
              style={styles.background}
            />
            <TextInput>환영합니다.</TextInput>
            <TextInput>MineCoder 님</TextInput>
          </View>
          <Container>
            <View
              style={{
                backgroundColor: "black",
                padding: 2,
                justifyContent: "center",
              }}>
              <AddressCard address={address}></AddressCard>
              <View style={{flexDirection:"row",justifyContent: "space-evenly", flexWrap:"wrap", alignItems:"center"}}>
                {data.map((p,i)=>{
                  return <Dount 
                  key={i} 
                  percentage={p.percentage} 
                  color={p.color} 
                  delay={1000} 
                  max={p.max}
                  radius={p.radius}
                  strokeWidth={p.strokeWidth}>
                  </Dount>
                })}
                
              </View>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingVertical: 50,
                  marginVertical: 20
                }}>
            
              </View>
              <View
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 10,
                  paddingVertical: 50,
                  marginBottom: 10,
                }}>
                {address ? (
                  <QRCode value={address} size={200} color="#3e4a85"></QRCode>
                ) : null}
              </View>
            </View>
          </Container>
          
        </>
      )}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  headBackcontainer: {
    // flex: 1,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B06AB3',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    color: "#2b92ff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
});
