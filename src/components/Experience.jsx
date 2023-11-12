import { userInputData, newCompanyTemplate, newPositionTemplate } from '../data'

export function ExperienceInputContainer({
  experience,
  handleExperienceChange,
}) {
  //todo

  return (
    <>
      <h2>Experience</h2>
      <div className='experienceDetailsContainer'>
        <ExperienceList />
      </div>
      <div className='buttons'>
        <button>New</button>
      </div>
    </>
  )
}

function ExperienceList({}) {
  //todo
}
