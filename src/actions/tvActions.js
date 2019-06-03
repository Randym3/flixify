import { GET_DETAILS, GET_ASIAN_DRAMAS, GET_POPULAR_TV } from "./types";
import axios from "axios";

const apiKey = "170638d59cd41f58852a2f12564d2503";

export const getTv = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  const data = res.data;
  dispatch({
    type: GET_DETAILS,
    payload: data
  });
};
export const getAsianDramas = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=35%2C18&include_null_first_air_dates=false&with_original_language=zh%7Cko`
  );
  const data = res.data;
  dispatch({
    type: GET_ASIAN_DRAMAS,
    payload: data.results
  });
};
export const getPopularTV = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&first_air_date.gte=2010-01-01&page=1&without_genres=16&include_null_first_air_dates=false&with_original_language=en`
  );
  const data = res.data;
  dispatch({
    type: GET_POPULAR_TV,
    payload: data.results
  });
};
