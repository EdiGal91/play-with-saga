import { CREATE_POST, FETCH_POST, FETCHING } from "../types"

const initialState = {
  posts: [{title:'Title1', id:1}, {title:'Title2', id:2}],
  fetchedPosts: [],
  fetching: false,
}

export const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST: {
      return {...state, posts:[...state.posts, action.payload]}
    }
    case FETCH_POST: {
      return {...state, fetchedPosts: action.payload, fetching: false}
    }
    case FETCHING: {
      return {...state, fetching: true}
    }
    default: return state
  }
}