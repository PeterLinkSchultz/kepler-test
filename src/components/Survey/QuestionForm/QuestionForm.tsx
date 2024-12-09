import { FC, useState } from "react";

import { SurveyQuestion } from "../types";
import { IonButton, IonText } from "@ionic/react";
import QuestionField from "./QuestionField";

type Props = {
  data: SurveyQuestion;
  onUpdate: (id: string, answer: any) => void;
  onBack?: () => void;
  isPending: boolean;
};

const QuestionForm: FC<Props> = ({ data, onBack, onUpdate, isPending }) => {
  const [value, setValue] = useState(data?.answer);

  const onChange = (newValue: any) => {
    setValue(newValue);
  };
  const isDisabledSubmit = (Array.isArray(value) && !value.length) || !value;
  const onSubmit = () => {
    if (!isDisabledSubmit) {
      onUpdate(data._id, value);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <IonText>{data.title}</IonText>
      <QuestionField
        type={data.type}
        options={data.options}
        onChange={onChange}
        value={value}
      />
      {typeof onBack === "function" && (
        <IonButton type="submit" disabled={isPending} onClick={onBack}>
          Back
        </IonButton>
      )}
      <IonButton
        type="submit"
        disabled={isDisabledSubmit || isPending}
        onClick={onSubmit}
      >
        Save
      </IonButton>
    </form>
  );
};

export default QuestionForm;
