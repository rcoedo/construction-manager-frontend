import React, { useContext } from "react";
import { CompanyDataState } from "./useCompanyData";
import { SpecialtiesFilterActions, SpecialtiesFilterState } from "./useSpecialtiesFilter";
import { NameFilterActions, NameFilterState } from "./useNameFilter";
import { noop } from "../utils";
import { Specialty } from "../interfaces";

export interface FiltersState {
  name: NameFilterState;
  specialties: SpecialtiesFilterState;
}

export interface ActionsState extends SpecialtiesFilterActions, NameFilterActions {}

export interface AppState {
  companies: CompanyDataState;
  isLoading: boolean;
  specialties: Specialty[];
  filters: FiltersState;
  actions: ActionsState;
}

export const AppStateContext = React.createContext<AppState>({
  companies: [],
  specialties: [],
  isLoading: false,
  filters: {
    name: "",
    specialties: [],
  },
  actions: {
    setNameFilter: noop,
    setSpecialtiesFilter: noop,
    removeSpecialtiesFilter: noop,
  },
});

export const useAppState = (): AppState => {
  const appState = useContext(AppStateContext);

  return appState;
};
