export function EducationInputContainer({
  education,
  onEducationDetailsChange,
}) {
  return (
    <div className="educationDetails component">
      <h2>Education</h2>
      <div className="educationDetailsContainer hidden">
        <EducationList
          education={education}
          handleEducationDetailsChange={onEducationDetailsChange}
        />

        <div className="buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

//

function EducationList({ education, handleEducationDetailsChange }) {
  function handleEducationSchoolClick(keyToEdit) {
    let newSchoolList = [...education];
    const indexToEdit = education.findIndex(
      (school) => school.key == keyToEdit
    );
    newSchoolList[indexToEdit].admin.editing =
      !newSchoolList[indexToEdit].admin.editing;
    handleEducationDetailsChange(newSchoolList);
  }
  return education.map((school) => (
    <div
      key={school.key}
      onClick={() => handleEducationSchoolClick(school.key)}
    >
      <p>{school.school}</p>
      {school.admin.editing && <EducationInputs education={education} />}
    </div>
  ));
}

function EducationInputs({ education, onEducationDetailsChange }) {
  return (
    <div className="educationDetailsInputsContainer">
      <label htmlFor="school">School:</label>
      <input
        type="text"
        id="school"
        defaultValue={education.school}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor="degree">Degree:</label>
      <input
        type="text"
        id="degree"
        defaultValue={education.degree}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor="start">Start Date:</label>
      <input
        type="text"
        id="start"
        defaultValue={education.start}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor="end">End Date:</label>
      <input
        type="text"
        id="end"
        defaultValue={education.end}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor="details">Details:</label>
      <input
        type="text"
        id="details"
        defaultValue={education.detials}
        onChange={onEducationDetailsChange}
      />
    </div>
  );
}

//this returns a list of SchoolDetails for the CV
export function EducationDetailsCV({ education }) {
  return <div className="educationListCV">
    {education.map(school => (<SchoolDetailsCV key={school.key} school={school} />))}
  </div>;
}

//This function returns a single schooldetails element for the list in the CV
function SchoolDetailsCV({ school }) {
  if (!school.admin.displayOnCV) return
  return (
    <div className="schoolCV" key={school.key}>
      <p className="schoolName">
        <b>{school.school}</b>
      </p>
      <p className="schoolDateRange">
        {school.start} - {school.end}
      </p>
      <p>{school.degree}</p>
      <p>{school.details}</p>
    </div>
  );
}
