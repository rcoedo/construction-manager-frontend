import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { CompanyListPage, CompanyDetailsPage } from "./pages/";
import { useCompanyData, useSpecialtiesFilter, useNameFilter } from "./hooks";
import { AppStateContext } from "./hooks/useAppState";
import { getSpecialties } from "./utils";

export const App = () => {
  const { companies, isLoading } = useCompanyData();
  const { nameFilter, nameFilterActions } = useNameFilter();
  const { specialtiesFilter, specialtiesFilterActions } = useSpecialtiesFilter();

  return (
    <AppStateContext.Provider
      value={{
        companies,
        isLoading,
        specialties: getSpecialties(companies),
        filters: { name: nameFilter, specialties: specialtiesFilter },
        actions: {
          ...nameFilterActions,
          ...specialtiesFilterActions,
        },
      }}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<CompanyListPage />} />
            <Route path="/company" element={<CompanyDetailsPage />}>
              <Route path=":companyId" element={<CompanyDetailsPage />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppStateContext.Provider>
  );
};
