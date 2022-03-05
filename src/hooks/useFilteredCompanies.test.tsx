import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { AppStateContext } from "./useAppState";
import { useFilteredCompanies } from "./useFilteredCompanies";
import { Specialty } from "../interfaces";
import * as companies from "../mocks/companies";

const state = {
  companies: companies.all,
  specialties: [Specialty.Plumbing, Specialty.Excavation, Specialty.Electrical],
  isLoading: false,
  filters: {
    name: "",
    specialties: [],
  },
  actions: {
    setNameFilter: jest.fn(),
    setSpecialtiesFilter: jest.fn(),
    removeSpecialtiesFilter: jest.fn(),
  },
};

describe("useFilteredCompanies", () => {
  test("if companies=[], filteredCompanies is also []", () => {
    const view = renderHook(() => useFilteredCompanies());

    expect(view.result.current).toEqual([]);
  });

  test("filters companies properly with empty filters", () => {
    const view = renderHook(() => useFilteredCompanies(), {
      wrapper: ({ children }) => <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>,
    });

    expect(view.result.current).toEqual(state.companies);
  });

  test("filters companies properly by name", () => {
    const view = renderHook(() => useFilteredCompanies(), {
      wrapper: ({ children }) => (
        <AppStateContext.Provider value={{ ...state, filters: { ...state.filters, name: "Supp" } }}>
          {children}
        </AppStateContext.Provider>
      ),
    });

    expect(view.result.current).toEqual([companies.supplypipe]);
  });

  test("filters companies properly by specialty", () => {
    const specialty = Specialty.Electrical;

    const view = renderHook(() => useFilteredCompanies(), {
      wrapper: ({ children }) => (
        <AppStateContext.Provider
          value={{
            ...state,
            filters: { ...state.filters, specialties: [specialty] },
          }}
        >
          {children}
        </AppStateContext.Provider>
      ),
    });

    const allIncluded = view.result.current
      .map((company) => company.specialties.includes(specialty))
      .reduce((acc, curr) => acc && curr);

    expect(allIncluded).toBe(true);
  });
});
