import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 3px;
`;
const LText = styled.Text``;

const Link = ({ onPress, text, icon }) => {
  return (
    <TouchableOpacity style={{ paddingLeft: 10 }} onPress={onPress}>
      <Container>
        <FontAwesome name={icon} color="white" size={25}></FontAwesome>
        <LText style={{ color: "white", paddingRight: 10, paddingLeft: 10 }}>
          {text}
        </LText>
      </Container>
    </TouchableOpacity>
  );
};

export default Link;
