import { userInputData, newCompanyTemplate, newPositionTemplate } from '../data'

export function ExperienceInputContainer({
  experience,
  handleExperienceChange,
}) {
  function onExperienceDetailsChange(keyToEdit) {
    //todo
  }
  function onExperienceCompanyClick(keyToEdit) {
    //todo
  }
  function onExperienceCompanyDelete(keyToDelete) {
    //todo (might want some sort of confimation here)
  }
  function onExperienceCompanyShowHide(keyToToggle) {
    //todo
  }
  function addNewCompany() {
    //todo
  }

  return (
    <>
      <h2>Experience</h2>
      <div className='experienceDetailsContainer'>
        <ExperienceList
          experience={experience}
          onExperienceDetailsChange={onExperienceDetailsChange}
          onExperienceCompanyClick={onExperienceCompanyClick}
          onExperienceCompanyDelete={onExperienceCompanyDelete}
          onExperienceCompanyShowHide={onExperienceCompanyShowHide}
        />
      </div>
      <div className='buttons'>
        <button onClick={addNewCompany}>New</button>
      </div>
    </>
  )
}

function ExperienceList({
  experience,
  onExperienceDetailsChange,
  onExperienceCompanyClick,
  onExperienceCompanyDelete,
  onExperienceCompanyShowHide,
}) {
  return experience.map((company) => (
    <div key={company.companyKey}>
      <h3 onClick={() => onExperienceCompanyClick(company.companyKey)}>
        {company.company || 'Name me!'}
      </h3>
      <span
        className='material-symbols-sharp delete'
        onClick={() => onExperienceCompanyDelete(company.companyKey)}
      >
        Delete
      </span>
      <span
        className='material-symbols-sharp display'
        onClick={() => onExperienceCompanyShowHide(company.companyKey)}
      >
        {company.admin.displayOnCV ? 'visibility' : 'visibility_off'}
      </span>
      <span
        className='material-symbols-sharp chevron'
        onClick={() => onExperienceCompanyClick(company.companyKey)}
      >
        {company.admin.editing ? 'expand_more' : 'expand_less'}
      </span>
      {company.admin.editing && (
        <CompanyInputs
          onExperienceDetailsChange={(e) =>
            onExperienceDetailsChange(e, company.companyKey)
          }
          company={company}
        />
      )}
    </div>
  ))
}

function CompanyInputs({ company, onExperienceDetailsChange }) {
  //todo
}
