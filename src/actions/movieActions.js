import {
  GET_DISCOVER,
  GET_DETAILS,
  GET_NOW_PLAYING,
  GET_UPCOMING,
  GET_STUDIO_GHIBLI,
  GET_TOP_RATED,
  GET_CAST,
  GET_TRAILER,
  GET_SIMILAR
} from "./types";
import axios from "axios";

const apiKey = "170638d59cd41f58852a2f12564d2503";
export const getDiscover = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  );
  const data = res.data.results;
  dispatch({
    type: GET_DISCOVER,
    payload: data
  });
};

export const getNowPlaying = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = res.data;
  dispatch({
    type: GET_NOW_PLAYING,
    payload: data.results
  });
};
export const getUpcoming = () => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1&region=US
  `);
  const data = res.data;
  dispatch({
    type: GET_UPCOMING,
    payload: data.results
  });
};
export const getStudioGhibli = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`
  );
  const data = res.data;
  dispatch({
    type: GET_STUDIO_GHIBLI,
    payload: data.results
  });
};
export const getTopRated = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = res.data;
  dispatch({
    type: GET_TOP_RATED,
    payload: data.results
  });
};

export const getMovie = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  const data = res.data;
  dispatch({
    type: GET_DETAILS,
    payload: data
  });
};

export const getCast = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}`
  );
  const data = res.data;
  dispatch({
    type: GET_CAST,
    payload: data.cast.slice(0, 5)
  });
};

export const getTrailer = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=en-US`
  );
  const data = res.data;
  data.results.length >= 1
    ? dispatch({
        type: GET_TRAILER,
        payload: data.results[0].key
      })
    : dispatch({
        type: GET_TRAILER,
        payload: "noid"
      });
};

export const getSimilar = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = res.data;
  dispatch({
    type: GET_SIMILAR,
    payload: data.results
  });
};
