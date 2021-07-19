import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, answer } from "../actions/cambiarEstadoRespuesta";
import { PantallaResultados } from "./PantallaResultados";

export const Question = () => {
  const dispatch = useDispatch();

  const { counter, totalQuestions, idCorrectAnswer, idUserAnswer, quizObject } =
    useSelector((state) => state.game);

  const handleOptionAnswered = (event) => {
    dispatch(answer(event.target.id));

    if (counter !== totalQuestions) {
      setTimeout(() => {
        dispatch(nextQuestion());
      }, 1000);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      {counter === totalQuestions && idUserAnswer !== null && (
        <PantallaResultados />
      )}

      {counter}

      <div className="container">
        <div className="numeroPregunta">
          {" "}
          <h1>{counter}.</h1>
        </div>
        {quizObject && (
          <>
            <div className="imagen">
              <img
                src={
                  quizObject.correctAnswer.url != null &&
                  quizObject.correctAnswer.url != null
                    ? quizObject.correctAnswer.url
                    : ""
                }
                width="200px"
              ></img>
            </div>
            <div className="form-container">
              {quizObject.quizOptions.map((o) => (
                <button
                  id={o.id}
                  className={
                    "optionName " +
                    ((idUserAnswer !== null &&
                      o.id === idCorrectAnswer &&
                      "correcto") ||
                      (idUserAnswer !== null &&
                        o.id !== idCorrectAnswer &&
                        "incorrecto"))
                  }
                  key={o.id}
                  onClick={handleOptionAnswered}
                >
                  {" "}
                  {o.catName}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
