import { SurveyQuestion } from "./types";

export type State = {
  list: SurveyQuestion[];
  current: number;
  isFinished: boolean;
};

export enum ACTION {
  UPDATE_LIST = "update-list",
  STEP_BACK = "step-back",
}

type Action =
  | {
      type: ACTION.UPDATE_LIST;
      payload: SurveyQuestion;
    }
  | {
      type: ACTION.STEP_BACK;
    };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.UPDATE_LIST: {
      const updatedList = [...state.list];
      updatedList[state.current] = action.payload;

      if (state.current === state.list.length - 1) {
        return {
          list: updatedList,
          current: state.current,
          isFinished: true,
        };
      } else
        return {
          list: updatedList,
          current: state.current + 1,
          isFinished: false,
        };
    }
    case ACTION.STEP_BACK: {
      return {
        ...state,
        current: state.current ? state.current - 1 : 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
