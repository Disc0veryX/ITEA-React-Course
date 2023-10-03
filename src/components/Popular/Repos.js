import { memo } from "react";
import { useSelector } from "react-redux";

const Repos = memo(() => {
  const repos = useSelector(state => state.popularReducer.data);

  return (
    <ul className='popular-list'>
      {repos.map(function (repo, index) {
        return (
          <li key={repo.id} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
})

export default Repos;