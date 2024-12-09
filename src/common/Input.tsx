import { IonInput, IonItem } from "@ionic/react";
import { FC } from "react";

type Props = {
  name: string;
  type?: "text" | "number";
  value?: string | number;
  onChange: (value: any, name: string) => void;
};

const Input: FC<Props> = ({ value, name, type = "text", onChange }) => {
  return (
    <IonItem>
      <IonInput
        placeholder="Start typing"
        name={name}
        type={type}
        value={value}
        onIonChange={(event) => {
          const value =
            type == "number" ? +(event.target.value ?? "") : event.target.value;

          onChange(value, name);
        }}
      />
    </IonItem>
  );
};

export default Input;
