import { FC } from "react";
import { IPlayer } from "../../API";
import Profile from "./Profile"

interface IPlayerProps extends IPlayer {
  label: string;
}

const Player: FC<IPlayerProps> = (props): JSX.Element => {
  return (
    <div className="column">
      <h1 className="header">{props.label}</h1>
      <h3 style={{textAlign: "center"}}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  )
}

export default Player;