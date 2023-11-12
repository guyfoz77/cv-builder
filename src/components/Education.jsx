import { userInputData, newSchoolTemplate } from '../data'
// import { useState } from 'react';

export function EducationInputContainer({
  education,
  handleEducationDetailsChange,
}) {
  let newSchoolList = [...education]

  function onEducationDetailsChange(e, keyToEdit) {
    const indexToEdit = userInputData.education.findIndex(
      (school) => keyToEdit == school.key
    )
    let editedSchool = { ...newSchoolList[indexToEdit] }
    switch (e.target.id) {
      case 'school':
        editedSchool.school = e.target.value
        break
      case 'degree':
        editedSchool.degree = e.target.value
        break
      case 'start':
        editedSchool.start = e.target.value
        break
      case 'end':
        editedSchool.end = e.target.value
        break
      case 'details':
        editedSchool.details = e.target.value
        break
    }
    newSchoolList[indexToEdit] = editedSchool
    handleEducationDetailsChange(newSchoolList)
  }
  function handleEducationSchoolClick(keyToEdit) {
    const indexToEdit = education.findIndex((school) => school.key == keyToEdit)
    newSchoolList[indexToEdit].admin.editing =
      !newSchoolList[indexToEdit].admin.editing
    handleEducationDetailsChange(newSchoolList)
  }
  function onEducationSchoolDelete(keyToDelete) {
    const newSchoolListDeleted = newSchoolList.filter(
      (school) => school.key !== keyToDelete
    )
    handleEducationDetailsChange(newSchoolListDeleted)
  }
  function onEducationSchoolShowHide(keyToToggle) {
    const indexToEdit = newSchoolList.findIndex(
      (school) => keyToToggle == school.key
    )
    newSchoolList[indexToEdit].admin.displayOnCV =
      !newSchoolList[indexToEdit].admin.displayOnCV
    handleEducationDetailsChange(newSchoolList)
  }
  function addNewSchool() {
    newSchoolList.push(newSchoolTemplate)
    handleEducationDetailsChange(newSchoolList)
  }

  return (
    <>
      <h2>Education</h2>
      <div className='educationDetailsContainer'>
        <EducationList
          education={education}
          onEducationDetailsChange={onEducationDetailsChange}
          onEducationSchoolClick={handleEducationSchoolClick}
          onEducationSchoolDelete={onEducationSchoolDelete}
          onEducationSchoolShowHide={onEducationSchoolShowHide}
        />
        <div className='buttons'>
          <button onClick={addNewSchool}>New</button>
        </div>
      </div>
    </>
  )
}

//

function EducationList({
  education,
  onEducationDetailsChange,
  onEducationSchoolClick,
  onEducationSchoolDelete,
  onEducationSchoolShowHide,
}) {
  return education.map((school) => (
    <div key={school.key}>
      <h3 onClick={() => onEducationSchoolClick(school.key)}>
        {school.school || 'Name me!'}
      </h3>
      <span
        className='material-symbols-sharp delete'
        onClick={() => onEducationSchoolDelete(school.key)}
      >
        Delete
      </span>
      <span
        className='material-symbols-sharp display'
        onClick={() => onEducationSchoolShowHide(school.key)}
      >
        {school.admin.displayOnCV ? 'visibility' : 'visibility_off'}
      </span>
      <span
        className='material-symbols-sharp chevron'
        onClick={() => onEducationSchoolClick(school.key)}
      >
        {school.admin.editing ? 'expand_more' : 'expand_less'}
      </span>
      {school.admin.editing && (
        <EducationInputs
          onEducationDetailsChange={(e) =>
            onEducationDetailsChange(e, school.key)
          }
          school={school}
        />
      )}
    </div>
  ))
}

function EducationInputs({ school, onEducationDetailsChange }) {
  return (
    <div className='educationDetailsInputsContainer'>
      <label htmlFor='school'>School:</label>
      <input
        type='text'
        id='school'
        defaultValue={school.school}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='degree'>Degree:</label>
      <input
        type='text'
        id='degree'
        defaultValue={school.degree}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='start'>Start Date:</label>
      <input
        type='text'
        id='start'
        defaultValue={school.start}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='end'>End Date:</label>
      <input
        type='text'
        id='end'
        defaultValue={school.end}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='details'>Details:</label>
      <textarea
        rows={5}
        type='text'
        id='details'
        defaultValue={school.details}
        onChange={onEducationDetailsChange}
      />
    </div>
  )
}

//this returns a list of SchoolDetails for the CV
export function EducationDetailsCV({ education }) {
  return (
    <div className='educationListCV'>
      {education.map((school) => (
        <SchoolDetailsCV key={school.key} school={school} />
      ))}
    </div>
  )
}

//This function returns a single schooldetails element for the list in the CV
function SchoolDetailsCV({ school }) {
  if (!school.admin.displayOnCV) return
  return (
    <div className='schoolCV' key={school.key}>
      <p className='schoolName'>
        <b>{school.school}</b>
      </p>
      <p className='schoolDateRange'>
        {school.start} - {school.end}
      </p>
      <p>{school.degree}</p>
      <p>{school.details}</p>
    </div>
  )
}
