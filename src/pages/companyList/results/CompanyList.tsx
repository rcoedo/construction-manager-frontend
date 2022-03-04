import React from "react";
import styled from "styled-components";
import { useCompanyData, useFilteredCompanies } from "../../../hooks";
import { Highlight } from "../../../components/common";
import { Breakpoint } from "../../../utils";
import { CompanyCard } from "./CompanyCard";

const ResultsTitleBox = styled.div`
  padding: 0.25rem;
  margin-top: 2rem;
  border-bottom: 2px solid black;
`;

const CompanyListContainer = styled.div`
  @media only screen and ${Breakpoint.LG} {
    grid-template-columns: repeat(3, 1fr);
  }
  margin-top: 1rem;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

export const CompanyList = () => {
  const { isLoading } = useCompanyData();
  const filteredCompanies = useFilteredCompanies();

  return (
    <>
      {isLoading ? (
        <>
          <ResultsTitleBox>
            <Highlight>loading...</Highlight>
          </ResultsTitleBox>
        </>
      ) : (
        <>
          <ResultsTitleBox>
            <Highlight>results:</Highlight>
          </ResultsTitleBox>
          <CompanyListContainer>
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} value={company} />
            ))}
          </CompanyListContainer>
        </>
      )}
    </>
  );
};
