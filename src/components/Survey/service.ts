import instance, { ServerResponse } from "@api/instance";
import { SurveyQuestion, QUESTION_TYPE, Survey } from "./types";

export const queryKeys = {
  LIST: "survey-list",
  UPDATE: "survey-update",
};

export const getSurveyQuestions = async (id: number) => {
  const { data } = await instance.get<ServerResponse<Survey>>(`/survey/${id}`);

  return data.data;
};

export const updateSurveyAnswer = async (
  surveyId: string,
  questionId: string,
  answer: any
) => {
  const { data } = await instance.request<ServerResponse<SurveyQuestion>>({
    url: `/survey/${surveyId}`,
    method: "PUT",
    data: {
      questionId,
      answer,
    },
  });

  return data.data;
};
