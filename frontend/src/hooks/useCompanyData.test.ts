import { renderHook } from "@testing-library/react-hooks";
import { useCompanyData } from "./useCompanyData";

jest.mock("../mocks/getCompanies", () => ({
  getCompanies: () =>
    Promise.resolve([
      {
        id: "3a1bd165-4ec0-416b-b3de-5fe9bbec2535",
        name: "Supplypipe",
        specialties: ["Plumbing"],
        img: "supplypipe.png",
        city: "Madrid",
      },
    ]),
}));

describe("useCompanyData", () => {
  test("fetches and sets company data", async () => {
    const { result, waitForValueToChange } = renderHook(() => useCompanyData());

    await waitForValueToChange(() => result.current.companies);

    expect(result.current.companies).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Madrid",
          "id": "3a1bd165-4ec0-416b-b3de-5fe9bbec2535",
          "img": "supplypipe.png",
          "name": "Supplypipe",
          "specialties": Array [
            "Plumbing",
          ],
        },
      ]
    `);
  });

  test("sets isLoading to true on first render, then sets it to false after fetching", async () => {
    const { result, waitForValueToChange } = renderHook(() => useCompanyData());

    expect(result.current.isLoading).toEqual(true);

    await waitForValueToChange(() => result.current.isLoading);

    expect(result.current.isLoading).toEqual(false);
  });

  test("returns a list with the different specialties from the companies", async () => {
    const { result, waitForValueToChange } = renderHook(() => useCompanyData());

    await waitForValueToChange(() => result.current.companies);

    expect(result.current.specialties).toEqual(["Plumbing"]);
  });
});
