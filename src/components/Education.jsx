import { userInputData, newSchoolTemplate } from '../data';
// import { useState } from 'react';

export function EducationInputContainer({
  education,
  handleEducationDetailsChange,
}) {
  let newSchoolList = [...education];

  function handleEducationSchoolClick(keyToEdit) {
    const indexToEdit = education.findIndex(
      (school) => school.key == keyToEdit
    );
    newSchoolList[indexToEdit].admin.editing =
      !newSchoolList[indexToEdit].admin.editing;
    handleEducationDetailsChange(newSchoolList);
  }
  function onEducationDetailsChange(e, keyToEdit) {
    const indexToEdit = userInputData.education.findIndex(
      (school) => keyToEdit == school.key
    );
    let editedSchool = { ...newSchoolList[indexToEdit] };
    switch (e.target.id) {
      case 'school':
        editedSchool.school = e.target.value;
        break;
      case 'degree':
        editedSchool.degree = e.target.value;
        break;
      case 'start':
        editedSchool.start = e.target.value;
        break;
      case 'end':
        editedSchool.end = e.target.value;
        break;
      case 'details':
        editedSchool.end = e.target.value;
        break;
    }
    newSchoolList[indexToEdit] = editedSchool;
    handleEducationDetailsChange(newSchoolList);
  }
  function addNewSchool() {
    newSchoolList.push(newSchoolTemplate);
    handleEducationDetailsChange(newSchoolList);
  }
  function onEducationSchoolDelete(keyToDelete) {
    const newSchoolListDeleted = newSchoolList.filter(
      (school) => school.key !== keyToDelete
    );
    handleEducationDetailsChange(newSchoolListDeleted);
  }

  return (
    <div className='educationDetails component'>
      <h2>Education</h2>
      <div className='educationDetailsContainer hidden'>
        <EducationList
          education={education}
          onEducationDetailsChange={onEducationDetailsChange}
          onEducationSchoolClick={handleEducationSchoolClick}
          onEducationSchoolDelete={onEducationSchoolDelete}
        />
        <div className='buttons'>
          <button onClick={addNewSchool}>New</button>
        </div>
      </div>
    </div>
  );
}

//

function EducationList({
  education,
  onEducationDetailsChange,
  onEducationSchoolClick,
  onEducationSchoolDelete,
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
      <span className='material-symbols-sharp displayChevron'>
        {school.admin.editing ? 'expand_more' : 'expand_less'}
      </span>
      {school.admin.editing && (
        <EducationInputs
          onEducationDetailsChange={(e) =>
            onEducationDetailsChange(e, school.key)
          }
          school={school}
          newSchool={false}
        />
      )}
    </div>
  ));
}

function EducationInputs({ school, onEducationDetailsChange }) {
  let schoolUpdate = { ...school };

  return (
    <div className='educationDetailsInputsContainer'>
      <label htmlFor='school'>School:</label>
      <input
        type='text'
        id='school'
        defaultValue={schoolUpdate.school}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='degree'>Degree:</label>
      <input
        type='text'
        id='degree'
        defaultValue={schoolUpdate.degree}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='start'>Start Date:</label>
      <input
        type='text'
        id='start'
        defaultValue={schoolUpdate.start}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='end'>End Date:</label>
      <input
        type='text'
        id='end'
        defaultValue={schoolUpdate.end}
        onChange={onEducationDetailsChange}
      />
      <label htmlFor='details'>Details:</label>
      <textarea
        rows={5}
        type='text'
        id='details'
        defaultValue={schoolUpdate.details}
        onChange={onEducationDetailsChange}
      />
    </div>
  );
}

//this returns a list of SchoolDetails for the CV
export function EducationDetailsCV({ education }) {
  return (
    <div className='educationListCV'>
      {education.map((school) => (
        <SchoolDetailsCV key={school.key} school={school} />
      ))}
    </div>
  );
}

//This function returns a single schooldetails element for the list in the CV
function SchoolDetailsCV({ school }) {
  if (!school.admin.displayOnCV) return;
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
  );
}
