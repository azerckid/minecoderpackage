import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Dimensions, Image, Text } from "react-native";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native-gesture-handler";
import Votes from "../Votes";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BGImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 2px;
`;
const VotesContainer = styled.View`
  margin-bottom: 2px;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
`;

const DetailButton = styled.View`
  margin-top: 5px;
  width: 50%;
  background-color: #e74c3c;
  padding: 4px;
  padding-left: 4px;
  border-radius: 20px;
  text-align: center;
`;
const DetailText = styled.Text`
  padding-left: 3px;
  padding-bottom: 2px;
`;

const Slide = ({
  isTv = false,
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
  releaseDate,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      votes,
      poster,
      overview,
      releaseDate,
    });
  };
  return (
    <Container>
      <BGImage resizeMode="cover" source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster}></Poster>
        <Data>
          <Title>{title.slice(0, 20)}</Title>
          <VotesContainer>
            <Votes votes={votes}></Votes>
          </VotesContainer>

          <Overview>{overview.slice(0, 100)}...</Overview>
          <TouchableOpacity onPress={goToDetail}>
            <DetailButton>
              <DetailText style={{ color: "white" }}> View Detail </DetailText>
            </DetailButton>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
