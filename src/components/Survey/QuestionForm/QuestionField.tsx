import { FC } from "react";
import { AnswerOption, QUESTION_TYPE } from "../types";

import Select from "@common/Select";
import Input from "@common/Input";

type Props = {
  type: QUESTION_TYPE;
  options: AnswerOption[];
  onChange: (value: any) => void;
  value: any;
};

const QuestionField: FC<Props> = ({ type, value, onChange, options }) => {
  switch (type) {
    case QUESTION_TYPE.TEXT:
      return <Input name="text" onChange={onChange} value={value} />;
    case QUESTION_TYPE.NUMERIC:
      return (
        <Input name="number" onChange={onChange} value={value} type="number" />
      );
    case QUESTION_TYPE.SINGLE:
      return (
        <Select
          onChange={onChange}
          options={options}
          name="single"
          value={value}
        />
      );
    case QUESTION_TYPE.MULTI:
      return (
        <Select
          onChange={onChange}
          options={options}
          name="multi"
          value={value}
          isMulti
        />
      );
    default:
      return null;
  }
};

export default QuestionField;
