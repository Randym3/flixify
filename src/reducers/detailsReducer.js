import {
  GET_DETAILS,
  GET_CAST,
  GET_TRAILER,
  GET_SIMILAR
} from "../actions/types";
const initialState = {
  details: {},
  similar: [],
  genres: [],
  trailer: "",
  cast: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
        genres: action.payload.genres.map(cur => cur.name)
      };

    case GET_CAST:
      return {
        ...state,
        cast: action.payload
      };
    case GET_TRAILER:
      return {
        ...state,
        trailer: action.payload
      };
    case GET_SIMILAR:
      return {
        ...state,
        similar: action.payload
      };
    default:
      return state;
  }
}
