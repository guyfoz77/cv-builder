import { useState } from "react";
import { userInputData } from "./data";
import "./App.css";
import { PersonalDetails } from "./components/PersonalDetails";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    userInputData.personalDetails
  );
  return (
    <div className="mainContainer">
      <aside className="userInput">
        <div className="clearLoad">{/* todo */} clear/load</div>
        <PersonalDetails
          className="personalDetails"
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
        />
        <div className="education">{/* todo */}</div>
        <div className="experience">{/* todo */}</div>
      </aside>
      <main className="CV">
        <div className="personalDetailsCV">{/* todo */}</div>
        <div className="educationCV">{/* todo */}</div>
        <div className="professionalExperienceCV">{/* todo */}</div>
      </main>
    </div>
  );
}

export default App;
