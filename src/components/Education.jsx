export function EducationInputContainer({ education }) {
  return (
    <div className="educationDetails component">
      <h2>Education</h2>
      <div className="educationDetailsContainer hidden">
        <div className="educationDetailsInputsContainer">
          <EducationInputs education={education} />
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

function EducationInputs({ education }) {}
