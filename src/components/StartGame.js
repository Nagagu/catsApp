import React from "react";
import { useDispatch } from "react-redux";
import { loadQuestion, startGame } from "../actions/cambiarEstadoRespuesta";
import { getCats } from "../helpers/getData";

export const StartGame = () => {
  // useEffect(() => {
  //   getCats().then((quizObject) => {
  //     dispatch(startGame(quizObject));
  //   });
  // }, []);
  const dispatch = useDispatch();
  const handleStartGame = () => {
    getCats().then(dispatch(startGame()));
    // dispatch(startGame()).then(dispatch(loadQuestion(quizObject)));
    // debugger;
    // dispatch(loadQuestion(quizObject));
  };
  // const handleStartGame = () => {
  //   getCats().then((quizObject) => {
  //     dispatch(startGame(quizObject));
  //   });
  // };

  return (
    <div className="startGame-btn">
      <button onClick={handleStartGame}>START</button>
    </div>
  );
};
