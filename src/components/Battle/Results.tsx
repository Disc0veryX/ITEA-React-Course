import { API, IPlayer, IProfile } from "../../API";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, FC } from "react";
import Player from "./Player";

const Results: FC<{}> = (): JSX.Element => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [winner, setWinner] = useState<IPlayer | null>(null);
  const [loser, setLoser] = useState<IPlayer | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    API.battle([String(searchParams.get('playerOneName')), String(searchParams.get('playerTwoName'))])
      .then(data => {
        if (!data) {
          setError('Looks like you have problems!');
          setLoading(false);
        }

        setError(null);
        setLoading(false);
        setWinner((data as IPlayer[])[0]);
        setLoser((data as IPlayer[])[1]);
      })
    });

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <Link to='/battle'>Reset</Link>
      </div>
    )
  }

  return (
    <div className="row">
      <Player
        label='Winner'
        score={Number(winner?.score)}
        profile={winner?.profile as IProfile}
      />
      <Player
        label='Loser'
        score={Number(loser?.score)}
        profile={loser?.profile as IProfile}
      />
    </div>
  )
}

export default Results;