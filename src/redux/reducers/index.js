import { combineReducers } from "redux";
import heroReducer from "./heroReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  hero: heroReducer,
  contact: contactReducer,
});

export default rootReducer;
