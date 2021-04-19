import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { formatDate } from "../components/utils";
import { useNavigation } from "@react-navigation/native";
const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 2px;
`;
const VotesContainer = styled.View`
  margin-bottom: 2px;
`;
const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
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

const Horizontal = ({
  isTv = false,
  id,
  title,
  votes,
  poster,
  overview,
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
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster}></Poster>

        <Data>
          <Title>{title.slice(0, 20)}</Title>
          {releaseDate ? <ReleaseDate>{releaseDate}</ReleaseDate> : null}
          <Overview>{overview.slice(0, 150)}...</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  isTv: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
