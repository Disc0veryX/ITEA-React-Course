import { FC, ReactNode } from "react";

interface IPlayerPreviewProps {
  avatar: string;
  username: string;
  children: ReactNode;
}

export const PlayerPreview: FC<IPlayerPreviewProps> = (props): JSX.Element => {
  return (
    <div>
      <div className="column">
        <img className="avatar" src={props.avatar} alt="Avatar" />
        <h2 className="username">@{props.username}</h2>
      </div>
      {props.children}
    </div>
  )
}