import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import * as WebBrowser from "expo-web-browser";

const DetailContainer = ({
  navigation,
  route: {
    params: {
      isTv,
      id,
      title,
      votes,
      poster,
      overview,
      releaseDate,
      backgroundImage,
    },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    title,
    votes,
    poster,
    overview,
    releaseDate,
    backgroundImage,
    videos: {
      results: [],
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      ...getDetail,
      title: isTv ? getDetail.original_name : getDetail.title,
      backgroundImage: getDetail.backdrop_path,
      poster: getDetail.poster_path,
      overview: getDetail.overview,
      votes: getDetail.vote_average,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  return (
    <DetailPresenter
      openBrowser={openBrowser}
      movie={detail}
      loading={loading}
      refreshFn={getData}
    ></DetailPresenter>
  );
};

export default DetailContainer;
