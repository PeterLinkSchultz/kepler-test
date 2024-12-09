import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSpinner,
  IonToolbar,
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";

import { getSurveyQuestions, queryKeys } from "@components/Survey/service";
import SurveyContainer from "@components/Survey/SurveyContainer";

const Survey: React.FC = () => {
  const surveyQuery = useQuery({
    queryKey: [queryKeys.LIST],
    queryFn: () => getSurveyQuestions(1),
  });

  const renderResult = () => {
    if (!surveyQuery.isSuccess) {
      return;
    }
    if (surveyQuery.data.finished) {
      return <IonTitle>You finished survey</IonTitle>;
    }
    return !surveyQuery.data.questions.length ? (
      <IonTitle>Nothing to show</IonTitle>
    ) : (
      <SurveyContainer data={surveyQuery.data} />
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Survey</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {surveyQuery.isLoading && <IonSpinner name="dots"></IonSpinner>}
        {surveyQuery.isError && <IonTitle>Something goes wrong</IonTitle>}
        {renderResult()}
      </IonContent>
    </IonPage>
  );
};

export default Survey;
