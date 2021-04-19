// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((img) => {
    if (typeof img === "string") {
      return Image.prefetch(img);
    } else {
      return Asset.fromModule(img).downloadAsync();
    }
  });

const cachFonts = (fonts) => fonts.map((font) => [Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  // const [assets, error] = useAssets([...]);
  const loadAssets = () => {
    const images = cacheImages([
      "https://kavenyou.com/wp-content/uploads/2019/03/eyestyling-blackpink-choosing-colored-contact-lens.png",
      require("./assets/ddmcoin.png"),
    ]);
    const fonts = cachFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack></Stack>
      </NavigationContainer>
      <StatusBar barStyle="light-content "></StatusBar>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.warn}></AppLoading>
  );
}
