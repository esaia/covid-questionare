import useMultiStepForm from "./hooks/useMultiStepForm";
import { FormWrapper } from "./components";

function App() {
  const { step } = useMultiStepForm([
    <div>first page</div>,
    <FormWrapper imgURL="/images/one.png">პირადი ინფორმაცია</FormWrapper>,
  ]);

  return <>{step}</>;
}

export default App;
