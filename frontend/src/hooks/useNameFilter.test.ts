import { renderHook, act } from "@testing-library/react-hooks";
import { useNameFilter } from "./useNameFilter";

describe("useNameFilter", () => {
  test("sets the initial state", () => {
    const view = renderHook(() => useNameFilter("hello"));

    expect(view.result.current.nameFilter).toEqual("hello");
  });

  test("actions.setNameFilter sets the filter state", () => {
    const view = renderHook(() => useNameFilter());

    const { nameFilterActions } = view.result.current;

    act(() => {
      nameFilterActions.setNameFilter("hey");
    });

    expect(view.result.current.nameFilter).toEqual("hey");
  });
});
