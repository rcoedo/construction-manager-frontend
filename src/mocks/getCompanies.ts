import { Company } from "../interfaces";
import { all } from "./companies";

export const getCompanies = async (): Promise<Company[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...all]);
    }, 4000);
  });
};
