import { useState } from "react";
import { userInputData } from "./data";
import {
  PersonalDetails,
  PersonalDetailsCV,
} from "./components/PersonalDetails";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    userInputData.personalDetails
  );
  return (
    <div className="mainContainer">
      <aside className="userInput">
        <div className="clearLoad component">{/* todo */} clear/load</div>
        <PersonalDetails
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
        />
        <div className="education component">{/* todo */}</div>
        <div className="experience component">{/* todo */}</div>
      </aside>
      <main className="CV">
        <div className="personalDetailsCV">{/* todo */}</div>
        <PersonalDetailsCV
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
        />
        <div className="educationCV">{/* todo */}</div>
        <div className="professionalExperienceCV">{/* todo */}</div>
      </main>
    </div>
  );
}

export default App;
