import { Company, Specialty } from "../interfaces";

export const noop = () => {};

export const getSpecialties = (companies: Company[]): Specialty[] =>
  Array.from(
    companies.reduce((set, company) => {
      company.specialties.forEach((specialty) => {
        set.add(specialty);
      });
      return set;
    }, new Set<Specialty>()),
  );
