export enum Specialty {
  Excavation = "Excavation",
  Plumbing = "Plumbing",
  Electrical = "Electrical",
}

export interface Company {
  id: string;
  name: string;
  specialties: Specialty[];
  img: string;
  city: string;
}
