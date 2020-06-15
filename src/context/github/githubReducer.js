import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
} from "../types/types.js";

export default (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        // all users from github api
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        // copy whats in current state
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
