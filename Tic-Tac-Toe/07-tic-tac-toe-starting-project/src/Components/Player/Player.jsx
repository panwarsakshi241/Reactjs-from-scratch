import { useState } from "react";

function Player({ placeholder, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(placeholder);

  function handleOnClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {!isEditing ? (
            <span className="player-name">{playerName}</span>
          ) : (
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              required
            />
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
