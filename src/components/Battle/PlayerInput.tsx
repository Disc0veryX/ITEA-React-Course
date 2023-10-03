import { ChangeEvent, FormEvent, FC, useState } from "react";

interface IProps {
  id: string;
  label: string;
  onSubmit: (id: string, username: string) => void
}

export const PlayerInput: FC<IProps> = (props): JSX.Element => {
  const [userName, setUserName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(props.id, userName);
  }

  return (
    <form className="column" onSubmit={handleSubmit}>
      <label className="header" htmlFor="username">{props.label}</label>
      <input 
        type="text"
        placeholder="Github Username"
        id="username"
        value={userName}
        autoComplete="off"
        onChange={handleChange}/>
      <button 
        className="button"
        type="submit"
        disabled={!userName}>
          Submit
      </button>
    </form>
  )
}