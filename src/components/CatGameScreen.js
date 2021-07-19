import React from "react";
import { StartGame } from "./StartGame";
import { CatGame } from "./CatGame";
import { useDispatch, useSelector } from "react-redux";

export const CatGameScreen = () => {
  const { startedGame } = useSelector((state) => state.game);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="header ">
        <h1>Quiz Cat Game</h1>
        <h3>¿Cuánto sabes de gatos?</h3>
      </div>

      <hr />
      {startedGame ? <CatGame /> : <StartGame />}
    </div>
  );
};
