import { combineReducers } from "redux";
import doctor from "./doctor";
import alert from "./alert";
import book from "./book";

export default combineReducers({
  doctor,
  book,
  alert
});