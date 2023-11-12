import { userInputData, newCompanyTemplate, newPositionTemplate } from '../data'

export function ExperienceInputContainer({
  experience,
  handleExperienceDetailsChange,
}) {
  let newCompanyList = [...experience]

  function onExperienceDetailsChange(e, keyToEdit) {
    const indexToEdit = userInputData.experience.findIndex(
      (company) => keyToEdit == company.companyKey
    )
    let editedCompany = { ...newCompanyList[indexToEdit] }
    switch (e.target.id) {
      case 'company':
        editedCompany.company = e.target.value
        break
    }
    newCompanyList[indexToEdit] = editedCompany
    handleExperienceDetailsChange(newCompanyList)
    console.log(newCompanyList)
  }
  function onExperienceCompanyClick(keyToEdit) {
    const indexToEdit = experience.findIndex(
      (company) => company.companyKey == keyToEdit
    )
    newCompanyList[indexToEdit].admin.editing =
      !newCompanyList[indexToEdit].admin.editing
    handleExperienceDetailsChange(newCompanyList)
  }
  function onExperienceCompanyDelete(keyToDelete) {
    if (!confirm('Are you sure you wish to delete?')) return
    const newCompanyListDeleted = newCompanyList.filter(
      (company) => company.companyKey !== keyToDelete
    )
    handleExperienceDetailsChange(newCompanyListDeleted)
  }
  function onExperienceCompanyShowHide(keyToToggle) {
    const indexToEdit = newCompanyList.findIndex(
      (company) => keyToToggle == company.companyKey
    )
    newCompanyList[indexToEdit].admin.displayOnCV =
      !newCompanyList[indexToEdit].admin.displayOnCV
    handleExperienceDetailsChange(newCompanyList)
  }
  function addNewCompany() {
    newCompanyList.push(newCompanyTemplate)
    handleExperienceDetailsChange(newCompanyList)
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
          onExperienceDetailsChange={onExperienceDetailsChange}
          company={company}
        />
      )}
    </div>
  ))
}

function CompanyInputs({ company, onExperienceDetailsChange }) {
  return (
    <div className='educationDetailsInputContainer'>
      <label htmlFor='Company'>Company:</label>
      <input
        type='text'
        id='company'
        defaultValue={company.company}
        onChange={(e) => onExperienceDetailsChange(e, company.companyKey)}
      />
      <PositionList
        positions={company.positions}
        companyKey={company.companyKey}
      />
    </div>
  )
}

function PositionList({ positions, companyKey }) {
  //Next time, you need to add the same buttons to each of these divs as in the company list
  //You need to make a function to handle the editing of a position

  return positions.map((position) => (
    <div key={position.positionKey}>
      <h4>{position.position}</h4>
    </div>
  ))
}
