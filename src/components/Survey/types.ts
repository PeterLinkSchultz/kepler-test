export enum QUESTION_TYPE {
  TEXT = "text",
  SINGLE = "single",
  MULTI = "multi",
  NUMERIC = "number",
}

export type AnswerOption = {
  id: number;
  label: string;
};

export type SurveyQuestion = {
  _id: string;
  title: string;
  type: QUESTION_TYPE;
  options: AnswerOption[];
  answer?: number | number[] | string;
};

export type Survey = {
  _id: string;
  questions: SurveyQuestion[];
  finished?: boolean;
};
