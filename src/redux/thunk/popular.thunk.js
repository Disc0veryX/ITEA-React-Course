import {fetchPopularReposRequest, fetchPopularReposSuccess, fetchPopularReposFailure, setLanguageAction} from "../actions/popular.actions";
import { API } from "../../API";

export const fetchPopularRepos = (language) => (dispatch) => {
  dispatch(setLanguageAction(language))
  dispatch(fetchPopularReposRequest());

  return API.fetchPopularRepos(language)
    .then(response => dispatch(fetchPopularReposSuccess(response)))
    .catch(error => dispatch(fetchPopularReposFailure(error)));
}