import { FormWrapper } from "@/components";
import { useMultiStepForm } from "@/hooks";

function App() {
  const { step } = useMultiStepForm([
    <div>first page</div>,
    <FormWrapper imgURL="/images/one.png">პირადი ინფორმაცია</FormWrapper>,
  ]);

  return <>{step}</>;
}

export default App;
