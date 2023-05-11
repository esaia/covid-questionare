import { useMultiStepForm } from "@/hooks";
import {
  PersonalInformation,
  FormWrapper,
  Starter,
  CovidCondition,
  IsVaccinated,
  CovidPolitic,
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
    <FormWrapper>
      <CovidPolitic />
    </FormWrapper>,
  ]);

  return <div className="bg-[#EAEAEA] min-h-screen">{step}</div>;
}

export default App;
