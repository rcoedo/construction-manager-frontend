import { useMemo } from "react";
import { useAppState } from "./useAppState";
import { Specialty } from "../interfaces";

const labelsMatch = (filters: Specialty[], values: Specialty[]) =>
  filters.reduce((acc, curr) => {
    return acc && values.includes(curr);
  }, true);

export const useFilteredCompanies = () => {
  const {
    companies,
    filters: { name: nameFilter, specialties: specialtiesFilter },
  } = useAppState();

  const filteredCompanies = useMemo(
    () =>
      companies.filter(
        (company) =>
          company.name.toLowerCase().startsWith(nameFilter.toLowerCase()) &&
          labelsMatch(specialtiesFilter, company.specialties),
      ),
    [companies, nameFilter, specialtiesFilter],
  );

  return filteredCompanies;
};
