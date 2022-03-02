import { useState, useCallback } from "react";
import { Specialty } from "../interfaces";

export type SpecialtiesFilterState = Specialty[];

export interface SpecialtiesFilterActions {
  setSpecialtiesFilter: (specialties: SpecialtiesFilterState) => void;
  removeSpecialtiesFilter: (specialty: Specialty) => void;
}

export const useSpecialtiesFilter = (
  initialState: SpecialtiesFilterState = [],
): { specialtiesFilter: SpecialtiesFilterState; specialtiesFilterActions: SpecialtiesFilterActions } => {
  const [specialtiesFilter, setSpecialtiesFilter] = useState<SpecialtiesFilterState>(initialState);

  const removeSpecialtiesFilter = useCallback(
    (specialty: Specialty) => setSpecialtiesFilter(specialtiesFilter.filter((value) => value !== specialty)),
    [specialtiesFilter],
  );

  return {
    specialtiesFilter,
    specialtiesFilterActions: {
      setSpecialtiesFilter,
      removeSpecialtiesFilter,
    },
  };
};
