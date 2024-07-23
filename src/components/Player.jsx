import { useState, useRef } from "react";

export default function Player() {
  const currentPlayerName = useRef();
  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(currentPlayerName.current.value);
    currentPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown"}</h2>
      <p>
        <input type="text" ref={currentPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
