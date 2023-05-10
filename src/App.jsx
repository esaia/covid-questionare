import { useMultiStepForm } from "@/hooks";
import {
  PersonalInformation,
  FormWrapper,
  Starter,
  CovidCondition,
  IsVaccinated,
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
      <IsVaccinated />
    </FormWrapper>,
    <FormWrapper>next</FormWrapper>,
  ]);

  return <div className="bg-[#EAEAEA] min-h-screen">{step}</div>;
}

export default App;
