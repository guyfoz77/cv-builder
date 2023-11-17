import { userInputData, newCompanyTemplate, newPositionTemplate } from '../data'
import { v4 as uuid } from 'uuid'

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
    let newCompany = { ...newCompanyTemplate }
    newCompany.companyKey = uuid()
    newCompanyList.push(newCompany)
    handleExperienceDetailsChange(newCompanyList)
  }
  function handlePositionDetailsChange(newPositions, companyKeyToEdit) {
    const indexToEdit = experience.findIndex(
      (company) => company.companyKey == companyKeyToEdit
    )
    newCompanyList[indexToEdit].positions = newPositions
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
          handlePositionDetailsChange={handlePositionDetailsChange}
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
  handlePositionDetailsChange,
}) {
  return experience.map((company) => (
    <div key={company.companyKey}>
      <h3 onClick={() => onExperienceCompanyClick(company.companyKey)}>
        {company.company || 'Name me!'}
      </h3>
      <h3
        className='material-symbols-sharp delete'
        onClick={() => onExperienceCompanyDelete(company.companyKey)}
      >
        Delete
      </h3>
      <h3
        className='material-symbols-sharp display'
        onClick={() => onExperienceCompanyShowHide(company.companyKey)}
      >
        {company.admin.displayOnCV ? 'visibility' : 'visibility_off'}
      </h3>
      <h3
        className='material-symbols-sharp chevron'
        onClick={() => onExperienceCompanyClick(company.companyKey)}
      >
        {company.admin.editing ? 'expand_more' : 'expand_less'}
      </h3>
      {company.admin.editing && (
        <CompanyInputs
          onExperienceDetailsChange={onExperienceDetailsChange}
          company={company}
          handlePositionDetailsChange={handlePositionDetailsChange}
        />
      )}
    </div>
  ))
}

function CompanyInputs({
  company,
  onExperienceDetailsChange,
  handlePositionDetailsChange,
}) {
  function addNewPosition() {
    let newPosition = { ...newPositionTemplate }
    newPosition.positionKey = uuid()
    const newPositionsList = [...company.positions]
    newPositionsList.push(newPosition)
    console.log(newPositionsList)
    handlePositionDetailsChange(newPositionsList, company.companyKey)
  }
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
        handlePositionDetailsChange={handlePositionDetailsChange}
      />
      <button onClick={addNewPosition}>New Position</button>
    </div>
  )
}

function PositionList({ positions, companyKey, handlePositionDetailsChange }) {
  let newPositionList = [...positions]

  function onPositionDetailsChange(e, keyToEdit) {
    //todo
  }

  function onExperiencePositionClick(keyToEdit) {
    const indexToEdit = positions.findIndex(
      (position) => position.positionKey == keyToEdit
    )
    newPositionList[indexToEdit].admin.editing =
      !newPositionList[indexToEdit].admin.editing
    handlePositionDetailsChange(newPositionList, companyKey)
  }
  function onExperiencePositionDelete(keyToDelete) {
    const newPositionListDeleted = newPositionList.filter(
      (position) => position.positionKey !== keyToDelete
    )
    handlePositionDetailsChange(newPositionListDeleted, companyKey)
  }
  function onExperiencePositionShowHide(keyToToggle) {
    const indexToEdit = newPositionList.findIndex(
      (position) => keyToToggle == position.positionKey
    )
    newPositionList[indexToEdit].admin.displayOnCV =
      !newPositionList[indexToEdit].admin.displayOnCV
    handlePositionDetailsChange(newPositionList, companyKey)
  }

  return positions.map((position) => (
    <div key={position.positionKey}>
      <h4 onClick={() => onExperiencePositionClick(position.positionKey)}>
        {position.position}
      </h4>
      <h4
        className='material-symbols-sharp delete'
        onClick={() => onExperiencePositionDelete(position.positionKey)}
      >
        Delete
      </h4>
      <h4
        className='material-symbols-sharp display'
        onClick={() => onExperiencePositionShowHide(position.positionKey)}
      >
        {position.admin.displayOnCV ? 'visibility' : 'visibility_off'}
      </h4>
      <h4
        className='material-symbols-sharp chevron'
        onClick={() => onExperiencePositionClick(position.positionKey)}
      >
        {position.admin.editing ? 'expand_more' : 'expand_less'}
      </h4>
      {position.admin.editing && (
        <PositionInputs
          // onExperienceDetailsChange={onExperienceDetailsChange}
          position={position}
        />
      )}
    </div>
  ))
}

//todo: make these change the stuff on the CV
//todo: make input to add experience.
function PositionInputs({ onExperienceDetailsChange, position }) {
  return (
    <div className='positionDetailsInputsContainer'>
      <label htmlFor='position'>Position:</label>
      <input
        type='text'
        id='position'
        defaultValue={position.position}
        // onChange={}
      />
      <label htmlFor='start'>Start Date:</label>
      <input
        type='text'
        id='start'
        defaultValue={position.start}
        // onChange={}
      />
      <label htmlFor='end'>End Date:</label>
      <input
        type='text'
        id='end'
        defaultValue={position.end}
        // onChange={}
      />
      <label htmlFor='details'>Details:</label>
      <textarea
        rows={5}
        type='text'
        id='details'
        defaultValue={position.details}
        // onChange={}
      />
    </div>
  )
}

//list of companys
export function ExperienceDetailsCV({ experience }) {
  return (
    <div className='experienceListCV'>
      {experience.map((company) => (
        <CompanyDetailsCV key={company.companyKey} company={company} />
      ))}
    </div>
  )
}
//single company with list of positions.
function CompanyDetailsCV({ company }) {
  if (!company.admin.displayOnCV) return
  return (
    <div className='companyCV' key={company.companyKey}>
      <p className='companyName'>
        <b>{company.company}</b>
      </p>
      <PositionListCV company={company} />
    </div>
  )
}
//List of positions within a company
function PositionListCV({ company }) {
  return (
    <div className={'positionContainerCV'}>
      {company.positions.map((position) => (
        <PositionCV key={position.positionKey} position={position} />
      ))}
    </div>
  )
}
//single position card on CV
function PositionCV({ position }) {
  if (!position.admin.displayOnCV) return
  return (
    <div className='positionCardCV'>
      <p>{position.position}</p>
      <p>
        {position.start} - {position.end}
      </p>
      <p>{position.details}</p>
    </div>
  )
}
