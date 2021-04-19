import axios from "axios";

export const instance = axios.create({
  baseURL: "https://reqres.in/api",
});

// const fetchData=async()=>{
//     const request = await axios.get(fetchUrl,{
//       params:{
//         ID: 12345,
//         password : 12345,
//       }
//     })
//     alert(JSON.stringify(request.data.data[0].avatar))
//     console.log(request.data)

const upbitPrice = (params) =>
  axios.get(`https://api.upbit.com/v1/ticker`, {
    params: {
      ...params,
    },
  });

const coinList = async () => {
  try {
    const { data: market } = await axios.get(
      `https://api.upbit.com/v1/market/all`
    );
    console.log(market);
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

const getCoinPrice = async (params = {}) => {
  try {
    const { data } = await upbitPrice(params);
    console.log("data", data[0].opening_price);

    return data[0].opening_price;
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};
//what the fuck
//what the fuck again
export const coinApi = {
  allMarket: () => coinList(),
  coinPrice: () => getCoinPrice({ markets: "KRW-BTC" }),
};

// movie
const TBMB_KEY = "c39f66305cb6bd411613ca999ce32f56";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      api_key: TBMB_KEY,
      ...params,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything("/movie/now_playing"),
  popular: () => getAnything("/movie/popular"),
  upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
  search: (query) => getAnything("/search/movie", { query }),
  movie: (id) => getAnything(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today"),
  thisWeek: () => getAnything("/tv/on_the_air"),
  topRated: () => getAnything("/tv/top_rated"),
  popular: () => getAnything("/tv/popular"),
  search: (query) => getAnything("/search/tv", { query }),
  show: (id) => getAnything(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://filmlexikon.hu/media/persons/portraits/t/tessa-thompson--RH6EFzIocL.jpg";
