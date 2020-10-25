import { combineReducers } from "redux";
import { postsReducer } from "./posts";
import { appReducer } from "./app";

export const reducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
})