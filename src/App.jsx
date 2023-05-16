import {
  PersonalInformation,
  FormWrapper,
  Starter,
  CovidCondition,
  IsVaccinated,
  CovidPolitic,
  ThankYouPage,
} from "@/components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#EAEAEA] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starter />} />

          <Route
            path="/personal"
            element={
              <FormWrapper>
                <PersonalInformation />
              </FormWrapper>
            }
          />

          <Route
            path="/covid-condition"
            element={
              <FormWrapper>
                <CovidCondition />
              </FormWrapper>
            }
          />

          <Route
            path="/is-vaccinated"
            element={
              <FormWrapper>
                <IsVaccinated />
              </FormWrapper>
            }
          />

          <Route
            path="/covid-politic"
            element={
              <FormWrapper>
                <CovidPolitic />
              </FormWrapper>
            }
          />

          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
