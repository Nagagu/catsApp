import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../actions/cambiarEstadoRespuesta";
import { getCats } from "../helpers/getData";

export const StartGame = () => {
  const dispatch = useDispatch();
  const handleStartGame = () => {
    getCats().then(dispatch(startGame()));
  };

  return (
    <div className="startGame-btn">
      <button onClick={handleStartGame}>START</button>
    </div>
  );
};
