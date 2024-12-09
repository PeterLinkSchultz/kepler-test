import { useMutation } from "@tanstack/react-query";

import { SurveyQuestion } from "../types";
import { queryKeys, updateSurveyAnswer } from "../service";

type MutationArgs = {
  answer: any;
  surveyId: string;
  questionId: string;
};

const useSurveyMutation = (onSuccess: (data: SurveyQuestion) => void) => {
  return useMutation({
    mutationKey: [queryKeys.UPDATE],
    mutationFn: ({ surveyId, questionId, answer }: MutationArgs) => {
      return updateSurveyAnswer(surveyId, questionId, answer);
    },
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};

export default useSurveyMutation;
