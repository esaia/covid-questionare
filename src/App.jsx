import { useMultiStepForm } from "@/hooks";
import {
  PersonalInformation,
  FormWrapper,
  Starter,
  CovidCondition,
} from "@/components";

function App() {
  const { step } = useMultiStepForm([
    <Starter />,
    <FormWrapper>
      <PersonalInformation />
    </FormWrapper>,
    <FormWrapper>
      <CovidCondition />
    </FormWrapper>,
    <FormWrapper>
      <p>three</p>
    </FormWrapper>,
  ]);

  return <div className="bg-[#EAEAEA] min-h-screen">{step}</div>;
}

export default App;
