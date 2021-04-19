import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View, FlatList } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horiziontal";
import ScrollContainer from "../../components/ScrollContainer";
import Transaction from "../../components/Transaction";
import { instance } from "../../api";


const fetchUrl = "/users";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 5px;
`;
const Container = styled.View``;

export default ({ refreshFn, loading, upcoming }) => {
  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl, {
        params: {
          ID: 12345,
          password: 12345,
        },
      });
      console.log(JSON.stringify(request.data.data[0].avatar))
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
          <Container style={{flex: 1, backgroundColor:"#fff"}}>
            {upcoming.map((movie,i) => (
              <Transaction key={i} address={address}></Transaction>
            ))}
          </Container>   
      )}
    </ScrollContainer>
  );
};
