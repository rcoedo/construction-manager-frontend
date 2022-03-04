import { Specialty } from "../interfaces";

export const supplypipe = {
  id: "3a1bd165-4ec0-416b-b3de-5fe9bbec2535",
  name: "Supplypipe",
  specialties: [Specialty.Plumbing, Specialty.Electrical],
  img: "supplypipe.png",
  city: "Madrid",
};

export const moderncog = {
  id: "92a7a561-e67e-4913-9aa1-acdb902e820c",
  name: "Modern Cog",
  specialties: [Specialty.Excavation],
  img: "moderncog.png",
  city: "Barcelona",
};

export const pumpshed = {
  id: "8bfd422f-36b4-47d0-8ced-e6ba0033f926",
  name: "Pumpshed",
  specialties: [Specialty.Plumbing],
  img: "pumpshed.png",
  city: "Berlin",
};

export const electrosentry = {
  id: "b65392fc-c603-4d91-9a43-92ab8f5b04f2",
  name: "Electrosentry",
  specialties: [Specialty.Electrical],
  img: "electrosentry.png",
  city: "Paris",
};

export const hydropipeline = {
  id: "37966097-c070-48a2-9730-fd3853d8292e",
  name: "Hydro Pipeline",
  specialties: [Specialty.Plumbing, Specialty.Excavation],
  img: "hydropipeline.png",
  city: "London",
};

export const gridwire = {
  id: "4a50139d-c21f-47d7-a7bf-996fca1c9e7c",
  name: "Gridwire",
  specialties: [Specialty.Electrical],
  img: "gridwire.png",
  city: "Roma",
};

export const powerworkshop = {
  id: "d07eefc7-59e3-492b-834a-aabaad1e9e5a",
  name: "Power Workshop",
  specialties: [Specialty.Excavation, Specialty.Plumbing, Specialty.Electrical],
  img: "powerworkshop.png",
  city: "Viena",
};

export const all = [supplypipe, moderncog, pumpshed, electrosentry, hydropipeline, gridwire, powerworkshop];
