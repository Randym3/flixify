import { GET_SEARCH_RESULTS, GET_DETAILS } from "./types";
import axios from "axios";

const apiKey = "170638d59cd41f58852a2f12564d2503";

export const getSearchResults = query => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const data = res.data;
  dispatch({
    type: GET_SEARCH_RESULTS,
    payload: data.results
  });
};

export const getDetails = (type, id) => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`
  );
  const data = res.data;
  dispatch({
    type: GET_DETAILS,
    payload: data
  });
};
