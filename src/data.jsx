import { v4 as uuid } from "uuid";

export const exampleData = {
  personalDetails: {
    name: "John Johnson",
    email: "john_dude9@email.com",
    phone: "+44123456789",
    address: "Nottingham, UK",
  },
  education: [
    {
      school: "City Uni",
      degree: "BSc in Chemistry",
      start: "09/2010",
      end: "05/2014",
      details:
        "Learned about chemicals etc. Completed a dissertation in particles.",
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
    {
      school: "Town Uni",
      degree: "MSc in Chemistry",
      start: "09/2014",
      end: "06/2016",
      details:
        "Learned more chemicals. Completed a dissertation in some stuff.",
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
    {
      school: "Another Uni",
      degree: "PHd in Condensed matter",
      start: "09/2016",
      end: "Present",
      details:
        "Made a groundbreaking discovery. Taught some chemistry and stuff",
      key: uuid(),
      admin: { editing: false, displayOnCV: true },
    },
  ],
};

export let userInputData = { ...exampleData };
