import { useEffect, useState, useMemo } from "react";
import { Company, Specialty } from "../interfaces";
import { getCompanies } from "../mocks/getCompanies";

export type CompanyDataState = Company[];

const getSpecialties = (companies: Company[]): Specialty[] =>
  Array.from(
    companies.reduce((set, company) => {
      company.specialties.forEach((specialty) => {
        set.add(specialty);
      });
      return set;
    }, new Set<Specialty>()),
  );

export const useCompanyData = (): { companies: CompanyDataState; isLoading: boolean; specialties: Specialty[] } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [companies, setCompanies] = useState<CompanyDataState>([]);

  const specialties = useMemo(() => getSpecialties(companies), [companies]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getCompanies();
      setCompanies(result);
      setIsLoading(false);
    })();
  }, []);

  return { companies, specialties, isLoading };
};
