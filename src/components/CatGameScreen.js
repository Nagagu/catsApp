import React from "react";
import { StartGame } from "./StartGame";
import { CatGame } from "./CatGame";
import { useDispatch, useSelector } from "react-redux";

export const CatGameScreen = () => {
  const { startedGame } = useSelector((state) => state.game);

  return (
    <div className="heroCat animate__animated animate__fadeIn">
      {/* <div className="container-game"> */}{" "}
      <div className="header ">
        <div className="cat-image-container">
          <div className="cat-image"></div>
        </div>
        <div className="title">
          <h1>Cat Quiz</h1>
        </div>
        <div className="title-question">
          {" "}
          <h3>How much do you know about cats?</h3>
        </div>
      </div>
      {startedGame ? <CatGame /> : <StartGame />}
    </div>
  );
};
