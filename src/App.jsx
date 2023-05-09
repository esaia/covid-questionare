import { useMultiStepForm } from "@/hooks";
import { PersonalInformation, FormWrapper, Starter } from "@/components";

function App() {
  const { step } = useMultiStepForm([
    <Starter />,
    <FormWrapper>
      <PersonalInformation />
    </FormWrapper>,
    <FormWrapper>second</FormWrapper>,
  ]);

  return <div className="bg-[#EAEAEA] min-h-screen">{step}</div>;
}

export default App;
