import axios from "axios";
import { CREATE_POST, FETCH_POST, FETCHING, SHOW_ALERT } from "../types";
import { showAlert } from "./app";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function fetchPost() {
  return dispatch => {
    dispatch({ type: FETCHING })
    setTimeout(async () => {
      const {data:posts} = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch({type: FETCH_POST, payload: posts})
    }, 700);
  }
}