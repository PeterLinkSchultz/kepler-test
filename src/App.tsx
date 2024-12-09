import { IonApp, setupIonicReact } from "@ionic/react";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@query/queryClient";
import Survey from "@pages/Survey";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <IonApp>
      <Survey />
    </IonApp>
  </QueryClientProvider>
);

export default App;
