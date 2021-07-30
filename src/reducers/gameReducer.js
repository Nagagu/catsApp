import { types } from "../types/types";

const initialState = {
  quizObject: null,
  idCorrectAnswer: null,
  idUserAnswer: null,
  counter: 1,
  startedGame: false,
  correctAnswersCount: 0,
  totalQuestions: 10,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.startGame:
      return {
        ...state,
        startedGame: true,
      };
    case types.loadQuestion:
      return {
        ...state,
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

    case types.nextQuestion:
      return {
        ...state,
        counter:
          state.counter < state.totalQuestions
            ? state.counter + 1
            : (state.counter = 0),
        idUserAnswer: null,
      };

    case types.reset:
      return initialState;

    default:
      return state;
  }
};
