import { useState } from 'react'
import { userInputData, exampleData } from './data'
import {
  PersonalDetails,
  PersonalDetailsCV,
} from './components/PersonalDetails'
import {
  EducationInputContainer,
  EducationDetailsCV,
} from './components/Education'

import {
  ExperienceInputContainer,
  ExperienceDetailsCV,
} from './components/Experience'

import githubImage from './assets/github-mark.svg'

function GithubLinkContainer() {
  return (
    <a
      className='githubLinkContainer component'
      href='https://github.com/guyfoz77'
      target='_blank'
      rel='noreferrer'
    >
      <img src={githubImage} aria-description='github mark' />

      <p>
        <i>Made by Guy Foster</i>
      </p>
    </a>
  )
}

function App() {
  const [personalDetails, setPersonalDetails] = useState(
    userInputData.personalDetails
  )
  const [educationDetails, setEducationDetails] = useState(
    userInputData.education
  )
  const [experienceDetails, setExperienceDetails] = useState(
    userInputData.experience
  )

  function handlePersonalDetailsChange(e) {
    const newPersonalDetails = { ...personalDetails }
    switch (e.target.id) {
      case 'name':
        newPersonalDetails.name = e.target.value
        setPersonalDetails(newPersonalDetails)
        break
      case 'email':
        newPersonalDetails.email = e.target.value
        setPersonalDetails(newPersonalDetails)
        break
      case 'phone':
        newPersonalDetails.phone = e.target.value
        setPersonalDetails(newPersonalDetails)
        break
      case 'address':
        newPersonalDetails.address = e.target.value
        setPersonalDetails(newPersonalDetails)
        break
    }
  }
  //replaces the storage array and the educationalDetails state with NewSchoolList.
  function handleEducationDetailsChange(newSchoolList) {
    setEducationDetails(newSchoolList)
    userInputData.education = newSchoolList
  }
  //replaces the storage array and the experienceDetails state with newExperienceList.
  function handleExperienceDetailsChange(newExperienceList) {
    setExperienceDetails(newExperienceList)
    userInputData.experience = newExperienceList
  }
  function clearForm() {
    if (!confirm('Are you sure?')) return
    setPersonalDetails({ name: '', email: '', phone: '', address: '' })
    setEducationDetails([])
    setExperienceDetails([])
  }
  function loadExample() {
    if (!confirm('Are you sure?')) return
    setPersonalDetails({ ...exampleData.personalDetails })
    setEducationDetails([...exampleData.education])
    setExperienceDetails([...exampleData.experience])
  }

  return (
    <div className='mainContainer'>
      <aside className='userInput'>
        <GithubLinkContainer />
        <div className='clearLoad component'>
          <button className='clear' onClick={clearForm}>
            Clear Form
          </button>
          <button className='load' onClick={loadExample}>
            Load Example
          </button>
        </div>
        <PersonalDetails
          personalDetails={personalDetails}
          onPersonalDetailsChange={handlePersonalDetailsChange}
        />
        <EducationInputContainer
          education={educationDetails}
          handleEducationDetailsChange={handleEducationDetailsChange}
        />
        <ExperienceInputContainer
          experience={experienceDetails}
          handleExperienceDetailsChange={handleExperienceDetailsChange}
        />
      </aside>
      <main className='CV'>
        <PersonalDetailsCV
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          address={personalDetails.address}
        />
        <h3>Education</h3>
        <EducationDetailsCV education={educationDetails} />
        <h3>Professional Experience</h3>
        <ExperienceDetailsCV experience={experienceDetails} />
      </main>
    </div>
  )
}

export default App
