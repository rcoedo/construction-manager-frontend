import { useState } from "react";

export type NameFilterState = string;

export interface NameFilterActions {
  setNameFilter: (name: NameFilterState) => void;
}

export const useNameFilter = (
  initialState: NameFilterState = "",
): { nameFilter: NameFilterState; nameFilterActions: NameFilterActions } => {
  const [nameFilter, setNameFilter] = useState<NameFilterState>(initialState);

  return { nameFilter, nameFilterActions: { setNameFilter } };
};
