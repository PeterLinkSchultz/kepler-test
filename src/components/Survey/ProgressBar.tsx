import { FC } from "react";
import { IonProgressBar } from "@ionic/react";

type Props = {
  current: number;
  max: number;
};

const ProgressBar: FC<Props> = ({ current, max }) => {
  return <IonProgressBar value={current / max} />;
};

export default ProgressBar;
