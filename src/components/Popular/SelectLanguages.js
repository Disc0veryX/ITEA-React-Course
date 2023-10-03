import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPopularReposAction } from "../../redux/actions/popular.actions";
import { fetchPopularRepos } from "../../redux/thunk/popular.thunk";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

export const SelectLanguages = memo(() => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);

  useEffect(() => {
    dispatch(fetchPopularRepos(selectedLanguage));

    return () => {
      dispatch(clearPopularReposAction());
    }
  });

  const selectLanguage = (language) => {
    dispatch(fetchPopularRepos(language));
  }

  return (
    <ul className='languages'>
      {languages.map((language, index) => (
        <li
          style={language === selectedLanguage ? { color: '#d0021b' } : null}
          onClick={() => selectLanguage(language)}
          key={index}>
          {language}
        </li>
        )
      )}
    </ul>
  )
})