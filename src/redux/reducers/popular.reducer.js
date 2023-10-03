import { POPULAR } from "../constants/popular.constants";

const initialState = {
  selectedLanguage: 'All',
  data: [],
  loading: false,
  error: null
}

export const popularReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR.SET_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      }
      case POPULAR.FETCH_POPULAR_REPOS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case POPULAR.FETCH_POPULAR_REPOS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload
        }
      case POPULAR.FETCH_POPULAR_REPOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
      case POPULAR.CLEAR_POPULAR_REPOS:
        return {
          ...state,
          data: []
        }  
      default:
        return state;
  }
}