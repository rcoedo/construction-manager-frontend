import React from "react";
import { Content } from "../../components/layout";
import { FilterControls } from "./controls/FilterControls";
import { CompanyList } from "./results/CompanyList";
import styled from "styled-components";

const CompanyListPageContainer = styled.div``;

const CompanyListPage = () => {
  return (
    <Content>
      <CompanyListPageContainer>
        <FilterControls />
        <CompanyList />
      </CompanyListPageContainer>
    </Content>
  );
};

export default CompanyListPage;
