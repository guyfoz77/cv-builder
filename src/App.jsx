import { useState } from "react";
import { userInputData } from "./data";
import {
  PersonalDetails,
  PersonalDetailsCV,
} from "./components/PersonalDetails";
import {
  EducationInputContainer,
  EducationDetailsCV,
} from "./components/Education";

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    userInputData.personalDetails
  );
  const [educationDetails, setEducationDetails] = useState(
    userInputData.education
  );

  function handlePersonalDetailsChange(e) {
    const newPersonalDetails = { ...personalDetails };
    switch (e.target.id) {
      case "name":
        newPersonalDetails.name = e.target.value;
        setPersonalDetails(newPersonalDetails);
        break;
      case "email":
        newPersonalDetails.email = e.target.value;
        setPersonalDetails(newPersonalDetails);
        break;
      case "phone":
        newPersonalDetails.phone = e.target.value;
        setPersonalDetails(newPersonalDetails);
        break;
      case "address":
        newPersonalDetails.address = e.target.value;
        setPersonalDetails(newPersonalDetails);
        break;
    }
  }

  function handleEducationDetailsChange(newSchoolList) {
    setEducationDetails(newSchoolList);
  }

  return (
    <div className="mainContainer">
      <aside className="userInput">
        <div className="clearLoad component">{/* todo */} clear/load</div>
        <PersonalDetails
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
          onPersonalDetailsChange={handlePersonalDetailsChange}
        />
        <div className="education component">
          <EducationInputContainer
            education={educationDetails}
            handleEducationDetailsChange={handleEducationDetailsChange}
          />
        </div>
        <div className="experience component">{/* todo */}</div>
      </aside>
      <main className="CV">
        <PersonalDetailsCV
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
        />
        <div className="educationCV">
          <h3>Education</h3>
          <EducationDetailsCV education={educationDetails} />
        </div>
        <div className="professionalExperienceCV">{/* todo */}</div>
      </main>
    </div>
  );
}

export default App;
