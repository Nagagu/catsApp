import { types } from "../types/types";

// export const startGame = () => {
//   return {
//     type: types.startGame,
//   };
// };
export const startGame = (/*quizObject*/) => {
  return {
    type: types.startGame,
    //payload: quizObject,
  };
};
export const loadQuestion = (quizObject) => {
  return {
    type: types.loadQuestion,
    payload: quizObject,
  };
};

// export const startCheckAnswer = (userAnswer) => {
//   return async (dispatch, getState) => {
// const {userAnswer} = getState
//   };
// };

// export const checkAnswer = (userAnswer) => {
//   return  {
//     type: types.checkAnswer,
//     payload: userAnswer,
//   };
// };

export const answer = (idUserAnswer) => {
  return {
    type: types.answer,
    payload: { idUserAnswer: idUserAnswer },
  };
};

export const cambiarEstadoRespuesta = (esCorrecto) => {
  return {
    type: types.cambiarEstadoRespuesta,
    payload: esCorrecto,
  };
};
export const obtenerResultadosFiltrados = (listaFiltrada) => {
  return {
    type: types.obtenerResultadosFiltrados,
    payload: listaFiltrada,
  };
};
export const nextQuestion = () => {
  return {
    type: types.nextQuestion,
  };
};
// export const pasarAlSiguiente = (contador, numeroTotalPreguntas) => {
//   return {
//     type: types.pasarAlSiguiente,
//     payload: { contador, numeroTotalPreguntas },
//   };
// };
export const comprobarRespuesta = (
  listaPosiblesRespuestas,
  idRespuestaMarcada,
  idRespuestaCorrecta
) => {
  return {
    type: types.comprobarRespuesta,
    payload: {
      listaPosiblesRespuestas,
      idRespuestaMarcada,
      idRespuestaCorrecta,
    },
  };
};
export const resetRespuestas = () => {
  return {
    type: types.resetRespuestas,
  };
};
export const resetRespuestasAcertadas = () => {
  return {
    type: types.resetRespuestasAcertadas,
  };
};
export const reset = () => {
  return {
    type: types.reset,
  };
};
