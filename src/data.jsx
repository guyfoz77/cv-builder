import { v4 as uuid } from 'uuid'

export const exampleData = {
  personalDetails: {
    name: 'John Johnson',
    email: 'john_dude9@email.com',
    phone: '+44123456789',
    address: 'Nottingham, UK',
  },
  education: [
    {
      school: 'City Uni',
      degree: 'BSc in Chemistry',
      start: '09/2010',
      end: '05/2014',
      details:
        'Learned about chemicals etc. Completed a dissertation in particles.',
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
    {
      school: 'Town Uni',
      degree: 'MSc in Chemistry',
      start: '09/2014',
      end: '06/2016',
      details:
        'Learned more chemicals. Completed a dissertation in some stuff.',
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
    {
      school: 'Another Uni',
      degree: 'PHd in Condensed matter',
      start: '09/2016',
      end: 'Present',
      details:
        'Made a groundbreaking discovery. Taught some chemistry and stuff',
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
  ],
  experience: [
    {
      company: 'Chemical labs',
      companyKey: uuid(),
      admin: { editing: false, displayOnCV: true },
      positions: [
        {
          position: 'Lab tech',
          start: '10/2020',
          end: '11/2022',
          details: 'Mixed up some chemicals for the researchers.',
          positionKey: uuid(),
          admin: { editing: false, displayOnCV: true },
        },
      ],
    },
    {
      company: 'Bohr labs',
      companyKey: uuid(),
      admin: { editing: false, displayOnCV: true },
      positions: [
        {
          position: 'Lab tech',
          start: '11/2022',
          end: '01/2023',
          details: 'Mixed up some chemicals for the researchers. Made tea.',
          positionKey: uuid(),
          admin: { editing: false, displayOnCV: true },
        },
        {
          position: 'Reasearcher',
          start: '01/2023',
          end: 'Present',
          details: 'Made a couple of groundbreaking discoveries.',
          positionKey: uuid(),
          admin: { editing: false, displayOnCV: true },
        },
      ],
    },
  ],
}

export const newSchoolTemplate = {
  school: 'New School',
  degree: '',
  start: '',
  end: '',
  details: '',
  key: '',
  admin: { editing: true, displayOnCV: true },
}

export const newCompanyTemplate = {
  company: 'New company',
  companyKey: '',
  admin: { editing: true, displayOnCV: true },
  positions: [
        {
      position: 'initial position',
      start: '',
      end: '',
      details: '',
      positionKey: '',
      admin: { editing: false, displayOnCV: true },
    },
  ],
}

export const newPositionTemplate = {
  position: 'New position',
  start: '',
  end: '',
  details: '',
  positionKey: '',
  admin: { editing: false, displayOnCV: true },
}

export let userInputData = { ...exampleData }
