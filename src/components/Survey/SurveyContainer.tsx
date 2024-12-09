import { FC } from "react";

import { Survey, SurveyQuestion } from "./types";
import useSurveyController from "./hooks/useSurveyController";
import QuestionForm from "./QuestionForm/QuestionForm";
import useSurveyMutation from "./hooks/useSurveyMutation";
import ProgressBar from "./ProgressBar";
import { IonSpinner } from "@ionic/react";

type Props = {
  data: Survey;
};

const SurveyContainer: FC<Props> = ({ data }) => {
  const { question, current, isFinished, onNext, onBack } = useSurveyController(
    data.questions
  );
  const mutation = useSurveyMutation(onNext);

  const updateAnswer = (id: string, answer: any) => {
    return mutation.mutate({ surveyId: data._id, questionId: id, answer });
  };

  return isFinished ? (
    <div>Finished</div>
  ) : (
    <>
      <ProgressBar current={current} max={data.questions.length} />
      <QuestionForm
        key={question._id}
        data={question}
        onUpdate={updateAnswer}
        isPending={mutation.isPending}
        onBack={current !== 0 ? onBack : undefined}
      />
      {mutation.isPending && <IonSpinner name="dots"></IonSpinner>}
    </>
  );
};

export default SurveyContainer;
