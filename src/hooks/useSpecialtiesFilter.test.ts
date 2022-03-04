import { renderHook, act } from "@testing-library/react-hooks";
import { Specialty } from "../interfaces";
import { useSpecialtiesFilter } from "./useSpecialtiesFilter";

describe("useSpecialtiesFilter", () => {
  test("sets the initial state", () => {
    const view = renderHook(() => useSpecialtiesFilter([Specialty.Electrical]));

    expect(view.result.current.specialtiesFilter).toEqual([Specialty.Electrical]);
  });

  test("actions.setSpecialtiesFilter sets the filter state", () => {
    const view = renderHook(() => useSpecialtiesFilter());

    const { specialtiesFilterActions } = view.result.current;

    act(() => {
      specialtiesFilterActions.setSpecialtiesFilter([Specialty.Electrical, Specialty.Excavation]);
    });

    expect(view.result.current.specialtiesFilter).toEqual([Specialty.Electrical, Specialty.Excavation]);
  });

  test("actions.removeSpecialtiesFilter removes a specialty from the state", () => {
    const view = renderHook(() => useSpecialtiesFilter([Specialty.Electrical, Specialty.Excavation, Specialty.Plumbing]));

    const { specialtiesFilterActions } = view.result.current;

    act(() => {
      specialtiesFilterActions.removeSpecialtiesFilter(Specialty.Electrical);
    });

    expect(view.result.current.specialtiesFilter).toEqual([Specialty.Excavation, Specialty.Plumbing]);
  });
});
