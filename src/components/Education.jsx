export function EducationInputContainer({
  education,
  onEducationDetailsChange,
}) {
  
  return (
    <div className="educationDetails component">
      <h2>Education</h2>
      <div className="educationDetailsContainer hidden">
        <EducationList education={education} />

        
        <div className="buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

function EducationList({ education }) {
  function onSchoolClick(school) {
    console.log(school);
    school.admin.editing = !school.admin.editing;
  }
  return education.map((school) => (
    <>
      <p key={school.key} onClick={() => onSchoolClick(school)}>
        {school.school}
      </p>
      {school.admin.editing && <EducationInputs education={education}/>}
    </>
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
