import { userInputData, newSchoolTemplate } from '../data'
import { v4 as uuid } from 'uuid'
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
    const indexToEdit = education.findIndex((school) => school.key === keyToEdit);
    const updatedSchoolList = newSchoolList.map((school) => ({ ...school }));
    updatedSchoolList[indexToEdit] = {
      ...updatedSchoolList[indexToEdit],
      admin: {
        ...updatedSchoolList[indexToEdit].admin,
        editing: !updatedSchoolList[indexToEdit].admin.editing,
      },
    };
    handleEducationDetailsChange(updatedSchoolList);
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
    let newSchool = { ...newSchoolTemplate }
    newSchool.key = uuid()
    newSchoolList.push(newSchool)
    handleEducationDetailsChange(newSchoolList)
  }

  return (
    <div className='education component'>
      <h2>Education</h2>
      <div className='educationDetailsContainer'>
        <EducationList
          education={education}
          onEducationDetailsChange={onEducationDetailsChange}
          onEducationSchoolClick={handleEducationSchoolClick}
          onEducationSchoolDelete={onEducationSchoolDelete}
          onEducationSchoolShowHide={onEducationSchoolShowHide}
        />
        <button onClick={addNewSchool}>New School</button>
      </div>
    </div>
  )
}

function EducationList({
  education,
  onEducationDetailsChange,
  onEducationSchoolClick,
  onEducationSchoolDelete,
  onEducationSchoolShowHide,
}) {
  return education.map((school) => (
    <div className='schoolNameAndInputContainer' key={school.key}>
      <div className='titleAndSymbols'>
        <h3 onClick={() => onEducationSchoolClick(school.key)}>
          {school.school || 'Name me!'}
        </h3>
        <h3
          className='material-symbols-sharp delete'
          onClick={() => onEducationSchoolDelete(school.key)}
        >
          Delete
        </h3>
        <h3
          className='material-symbols-sharp display'
          onClick={() => onEducationSchoolShowHide(school.key)}
        >
          {school.admin.displayOnCV ? 'visibility' : 'visibility_off'}
        </h3>
        <h3
          className='material-symbols-sharp chevron'
          onClick={() => onEducationSchoolClick(school.key)}
        >
          {school.admin.editing ? 'expand_more' : 'expand_less'}
        </h3>
      </div>
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
    <div className='educationDetailsInputContainer'>
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
      <h4 className='schoolName'>
        {school.school}
      </h4>
      <p className='schoolDateRange'>
        {school.start} - {school.end}
      </p>
      <p className='schoolDegree'>{school.degree}</p>
      <p className='schoolDescription'>{school.details}</p>
    </div>
  )
}
