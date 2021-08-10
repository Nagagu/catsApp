import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuestion } from "../actions/cambiarEstadoRespuesta";

import { getCats } from "../helpers/getData";

import { Question } from "./Question";

export const CatGame = () => {
  const dispatch = useDispatch();
  const { counter, quizObject } = useSelector((state) => state.game);

  useEffect(() => {
    getCats().then((quizObject) => {
      dispatch(loadQuestion(quizObject));
    });
  }, [counter]);

  return <Question quizObject={quizObject} />;
};
