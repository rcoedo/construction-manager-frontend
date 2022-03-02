import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useAppState, AppStateContext } from "./useAppState";
import { Specialty } from "../interfaces";

describe("useAppState", () => {
  test("context has a default value", () => {
    const view = renderHook(() => useAppState());

    expect(view.result.current).toMatchInlineSnapshot(`
      Object {
        "actions": Object {
          "removeSpecialtiesFilter": [Function],
          "setNameFilter": [Function],
          "setSpecialtiesFilter": [Function],
        },
        "companies": Array [],
        "filters": Object {
          "name": "",
          "specialties": Array [],
        },
        "isLoading": false,
        "specialties": Array [],
      }
    `);
  });

  test("returns the app state stored in the context", () => {
    const state = {
      companies: [],
      specialties: [],
      isLoading: true,
      filters: {
        name: "hey",
        specialties: [Specialty.Plumbing],
      },
      actions: {
        setNameFilter: jest.fn(),
        setSpecialtiesFilter: jest.fn(),
        removeSpecialtiesFilter: jest.fn(),
      },
    };

    const view = renderHook(() => useAppState(), {
      wrapper: ({ children }) => <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>,
    });

    expect(view.result.current).toMatchInlineSnapshot(`
      Object {
        "actions": Object {
          "removeSpecialtiesFilter": [MockFunction],
          "setNameFilter": [MockFunction],
          "setSpecialtiesFilter": [MockFunction],
        },
        "companies": Array [],
        "filters": Object {
          "name": "hey",
          "specialties": Array [
            "Plumbing",
          ],
        },
        "isLoading": true,
        "specialties": Array [],
      }
    `);
  });
});
