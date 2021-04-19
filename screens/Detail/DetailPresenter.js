import * as React from "react";
import * as WebBrowser from "expo-web-browser";

import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { apiImage } from "../../api";
import { Dimensions, ActivityIndicator } from "react-native";
import Poster from "../../components/Poster";
import Link from "../../components/Detail/Link";

const Text = styled.Text`
  color: white;
  padding-left: 10px;
`;
const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;
const BGImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  position: absolute;
`;

const Info = styled.View`
  padding-left: 10px;
`;

const DataName = styled.Text`
  margin-top: 10px;
  color: white;
  opacity: 0.8;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 15px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
  padding-left: 10px;
`;

export default ({ openBrowser, movie, loading, refreshFn }) => {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>
      <Container>
        {loading && (
          <ActivityIndicator style={{ marginTop: 50 }}></ActivityIndicator>
        )}
        <Header>
          <BGImage
            source={{
              uri: apiImage(movie.backgroundImage || movie.background_path),
            }}
          />
          <Text style={{ fontSize: 24, marginBottom: 10, textAlign: "center" }}>
            {movie.title}
          </Text>
          <Poster url={movie.poster}></Poster>
        </Header>

        <Info style={{ marginBottom: 50 }}>
          <Text style={{ marginTop: 10 }}>
            ★ {movie.votes} / 10 &nbsp; ∙ &nbsp; Release Date :{" "}
            {movie.release_date || movie.first_air_date}
          </Text>
          {movie.genres ? (
            <Text>
              Genres :{" "}
              {movie.genres.map((g, index) =>
                movie.genres.length - 1 === index ? `${g.name}` : `${g.name} ∙`
              )}
            </Text>
          ) : null}
          {movie.spoken_languages ? (
            <Text>
              Languages :{" "}
              {movie.spoken_languages.map((l, index) =>
                movie.spoken_languages.length - 1 === index
                  ? ` ${l.name} `
                  : ` ${l.name} ∙`
              )}{" "}
            </Text>
          ) : null}
          {movie.status ? <Text>Status : {movie.status}</Text> : null}
          {movie.runtime ? (
            <Text>
              Runtime : {movie.runtime} {""} minutes
            </Text>
          ) : null}
          {movie.revenue ? (
            <Text>
              Revenue : USD{" "}
              {movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
          ) : null}

          {movie.number_of_seasons ? (
            <Text>Seasons : {movie.number_of_seasons}</Text>
          ) : null}
          {movie.number_of_episodes ? (
            <Text>Episodes : {movie.number_of_episodes}</Text>
          ) : null}
          {movie.overview ? <DataName>Overview</DataName> : null}
          <Text style={{ marginBottom: 10 }}>{movie.overview}</Text>
          {movie.imdb_id && (
            <>
              <Link
                onPress={() =>
                  openBrowser(`https://www.imdb.com/title/${movie.imdb_id}`)
                }
                text={"IMDB Page"}
                icon={"imdb"}></Link>
            </>
          )}
          {movie.videos?.results?.length > 0 ? (
            <>
              {movie.videos.results.map((video) => (
                <Link
                  icon="youtube-play"
                  text={video.name}
                  key={video.id}
                  onPress={() =>
                    openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                  }></Link>
              ))}
            </>
          ) : null}
        </Info>
      </Container>
    </ScrollContainer>
  );
};
