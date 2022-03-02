import { useEffect, useState } from "react";
import { Company } from "../interfaces";
import { getCompanies } from "../mocks/getCompanies";

export type CompanyDataState = Company[];

export const useCompanyData = (): { companies: CompanyDataState; isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [companies, setCompanies] = useState<CompanyDataState>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const result = await getCompanies();
      setCompanies(result);
      setIsLoading(false);
    })();
  }, []);

  return { companies, isLoading };
};
