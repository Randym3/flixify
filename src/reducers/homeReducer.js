import {
  GET_DISCOVER,
  GET_ASIAN_DRAMAS,
  GET_POPULAR_TV,
  GET_NOW_PLAYING,
  GET_UPCOMING,
  GET_STUDIO_GHIBLI,
  GET_TOP_RATED
} from "../actions/types";

const initialState = {
  discover: [],
  nowPlaying: [],
  topRated: [],
  studioGhibli: [],
  upcoming: [],
  asianDramas: [],
  popularTV: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISCOVER:
      return {
        ...state,
        discover: action.payload
      };
    case GET_ASIAN_DRAMAS:
      return {
        ...state,
        asianDramas: action.payload
      };

    case GET_POPULAR_TV:
      return {
        ...state,
        popularTV: action.payload
      };

    case GET_TOP_RATED:
      return {
        ...state,
        topRated: action.payload
      };
    case GET_STUDIO_GHIBLI:
      return {
        ...state,
        studioGhibli: action.payload
      };
    case GET_UPCOMING:
      return {
        ...state,
        upcoming: action.payload
      };

    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload
      };

    default:
      return state;
  }
}
