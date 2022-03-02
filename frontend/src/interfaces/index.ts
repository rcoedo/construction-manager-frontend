export enum Specialty {
  Excavation = "Excavation",
  Plumbing = "Plumbing",
  Electrical = "Electrical",
}

export interface Company {
  name: string;
  specialties: Specialty[];
  img: string;
  city: string;
}
