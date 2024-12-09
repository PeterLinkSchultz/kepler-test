import { useReducer, useState } from "react";
import { SurveyQuestion } from "../types";
import reducer, { ACTION } from "../reducer";

const useSurveyController = (initialList: SurveyQuestion[]) => {
  const [{ list, current, isFinished }, dispatch] = useReducer(reducer, {
    list: initialList,
    current: initialList.findIndex(({ answer }) => !answer),
    isFinished: false,
  });

  return {
    question: list[current],
    current,
    isFinished,
    onBack: () => {
      dispatch({ type: ACTION.STEP_BACK });
    },
    onNext: (answer: any) => {
      dispatch({ type: ACTION.UPDATE_LIST, payload: answer });
    },
  };
};

export default useSurveyController;
