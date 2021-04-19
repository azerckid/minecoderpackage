import * as React from "react";
import { coinApi, movieApi } from "../../api";
import HomePresenter from "./HomePresenter";
import { loginApi } from "../../apiBoraWallet";

export default () => {
  const [movies, setMovies] = React.useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };

  const [allMarket, setAllMarket] = React.useState([]);
  const getAllMarket = async () => {
    const allMarkets = await coinApi.allMarket();
    setAllMarket(allMarkets);
    console.log("allMarkets", allMarket);
  };

  const [coinPrice, setCoinPrice] = React.useState();
  const getCoinPrice = async () => {
    const getcoinPrice = await coinApi.coinPrice();
    setCoinPrice(getcoinPrice);
  };

  const [loginInfo, setLoginInfo] = React.useState();
  const getLoginInfo = async () => {
    const loginInfo = await loginApi.getLoginInfo();
    setLoginInfo(loginInfo);
  };

  React.useEffect(() => {
    getData();
    // getAllMarket();
    // getCoinPrice();
    getLoginInfo();
    console.log(loginInfo);
    // console.log("coinPrice :", coinPrice);
  }, []);

  return <HomePresenter refreshFn={getData} {...movies}></HomePresenter>;
};
