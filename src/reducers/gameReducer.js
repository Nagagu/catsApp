import { types } from "../types/types";

// const initialState = {
//   idRespuestaMarcada: null,
//   idRespuestaCorrecta: null,
//   respuestasAcertadas: 0,
//   contador: 0,
//   startedGame: false,
// };

const initialState = {
  quizObject: null,
  idCorrectAnswer: null,
  idUserAnswer: null,
  counter: 1,
  startedGame: false,
  correctAnswersCount: 0,
  totalQuestions: 3,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startGame:
      //debugger;
      return {
        ...state,
        startedGame: true,
        //Esto debe ir en cada dispatch al cargar la nueva pregunta, una que se llame cargarNuevaPregunta
        // quizObject: action.payload,
        // idCorrectAnswer: action.payload.correctAnswer.id,
      };
    case types.loadQuestion:
      return {
        ...state,
        // startedGame: true,
        quizObject: action.payload,
        idCorrectAnswer: action.payload.correctAnswer.id,
      };

    case types.answer:
      const resultAnswerCorrect =
        action.payload.idUserAnswer === state.idCorrectAnswer ? 1 : 0;
      return {
        ...state,
        idUserAnswer: action.payload.idUserAnswer,
        correctAnswersCount: state.correctAnswersCount + resultAnswerCorrect,
      };

    case types.obtenerResultadosFiltrados:
      return {
        ...state,
        resultadosFiltrados: action.payload,
      };
    case types.nextQuestion:
      return {
        ...state,
        counter:
          state.counter < state.totalQuestions
            ? state.counter + 1
            : (state.counter = 0),
        idUserAnswer: null,
      };
    // case types.pasarAlSiguiente:
    //   return {
    //     ...state,
    //     contador:
    //       action.payload.contador < action.payload.numeroTotalPreguntas
    //         ? state.contador + 1
    //         : (state.contador = 0),
    //   };

    case types.comprobarRespuesta:
      // if (
      //   action.payload.idRespuestaMarcada === action.payload.idRespuestaCorrecta
      // ) {
      //   state.respuestasAcertadas = state.respuestasAcertadas + 1;
      // }
      if (
        action.payload.idRespuestaMarcada === action.payload.idRespuestaCorrecta
      )
        state.respuestasAcertadas = state.respuestasAcertadas + 1;

      // const respuestaCorrecta = action.payload.listaPosiblesRespuestas.filter(
      //   (o) => o.id === action.payload.idImagen
      // )[0];
      return {
        ...state,
        // idRespuestaCorrecta: respuestaCorrecta.id,
        idRespuestaMarcada: action.payload.idRespuestaMarcada,
        idRespuestaCorrecta: action.payload.idRespuestaCorrecta,
      };
    case types.resetRespuestas:
      return {
        ...state,
        idRespuestaMarcada: null,
        idRespuestaCorrecta: null,
      };
    case types.resetRespuestasAcertadas:
      return { ...state, respuestasAcertadas: 0 };

    case types.reset:
      return initialState;

    default:
      return state;
  }
};
