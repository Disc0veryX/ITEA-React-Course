import { POPULAR } from "../constants/popular.constants";

export const setLanguageAction = (payload) => ({
  type: POPULAR.SET_LANGUAGE,
  payload
})

export const fetchPopularReposRequest = () => ({
  type: POPULAR.FETCH_POPULAR_REPOS_REQUEST
})

export const fetchPopularReposSuccess = (payload) => ({
  type: POPULAR.FETCH_POPULAR_REPOS_SUCCESS,
  payload
})

export const fetchPopularReposFailure = (payload) => ({
  type: POPULAR.FETCH_POPULAR_REPOS_FAILURE,
  payload
})

export const clearPopularReposAction = () => ({
  type: POPULAR.CLEAR_POPULAR_REPOS
})