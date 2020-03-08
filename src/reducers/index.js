import { combineReducers } from "redux";

import homeReducer from "./homeReducer";
import detailsReducer from "./detailsReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
	home: homeReducer,
	details: detailsReducer,
	search: searchReducer
});
