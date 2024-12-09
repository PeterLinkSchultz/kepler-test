import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";
import { FC } from "react";

type Props = {
  name: string;
  isMulti?: boolean;
  options: SelectOption[];
  value?: number | number[];
  onChange: (value: any, name: string) => void;
};

const Select: FC<Props> = ({
  options,
  isMulti = false,
  value,
  onChange,
  name,
}) => {
  const placeholder = isMulti ? "Select one or more" : "Select one";

  return (
    <IonItem>
      <IonSelect
        multiple={isMulti}
        onIonChange={(event) => onChange(event.target.value, name)}
        value={value}
        name={name}
        placeholder={placeholder}
      >
        {options.map(({ id, label }) => (
          <IonSelectOption value={id} key={id}>
            {label}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
};

export default Select;
