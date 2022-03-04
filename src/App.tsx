import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { CompanyListPage } from "./pages/";
import { useCompanyData, useSpecialtiesFilter, useNameFilter } from "./hooks";
import { AppStateContext } from "./hooks/useAppState";

export const App = () => {
  const { companies, specialties, isLoading } = useCompanyData();
  const { nameFilter, nameFilterActions } = useNameFilter();
  const { specialtiesFilter, specialtiesFilterActions } = useSpecialtiesFilter();

  return (
    <AppStateContext.Provider
      value={{
        companies,
        isLoading,
        specialties,
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
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppStateContext.Provider>
  );
};
