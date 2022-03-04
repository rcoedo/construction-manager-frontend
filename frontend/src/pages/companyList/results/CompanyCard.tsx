import styled from "styled-components";
import { Company } from "../../../interfaces";
import { Highlight } from "../../../components/common";
import { Breakpoint } from "../../../utils";

const CompanyCardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  border: 2px solid black;
  border-radius: 3px;
  padding: 1em;
  &:hover {
    box-shadow: 4px 4px 0px -1px steelblue;
    cursor: pointer;
  }
`;

const CompanyCardLogo = styled.img`
  height: 100px;
  width: 180px;
`;

const CompanyCardLogoContainer = styled.div`
  text-align: center;
`;

const CompanyCardRow = styled.div`
  font-size: 14px;
  border-bottom: 2px solid black;
  padding: 0.25rem;
`;

const CompanyCardSpecialtiesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const CompanyCardSpecialtiesLabel = styled.div`
  flex: 0 1;
`;

const CompanyCardSpecialtiesList = styled.ul`
  flex: 0 1 75%;
`;

const CompanyCardSpecialtiesListItem = styled.li`
  @media only screen and ${Breakpoint.LG} {
    margin: 0;
    display: block;
  }
  margin: 0.25rem;
  display: inline;
`;

interface CompanyCardProps {
  value: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ value }) => (
  <CompanyCardContainer>
    <CompanyCardLogoContainer>
      <CompanyCardLogo src={`${process.env.PUBLIC_URL}/assets/images/${value.img}`} alt={value.name} />
    </CompanyCardLogoContainer>
    <CompanyCardRow>
      <Highlight>Name:</Highlight>&nbsp;
      {value.name}
    </CompanyCardRow>
    <CompanyCardRow>
      <Highlight>City:</Highlight>&nbsp;
      {value.city}
    </CompanyCardRow>
    <CompanyCardRow>
      <CompanyCardSpecialtiesContainer>
        <CompanyCardSpecialtiesLabel>
          <Highlight>Specialties:</Highlight>&nbsp;
        </CompanyCardSpecialtiesLabel>
        <CompanyCardSpecialtiesList>
          {value.specialties.map((specialty) => (
            <CompanyCardSpecialtiesListItem>{specialty}</CompanyCardSpecialtiesListItem>
          ))}
        </CompanyCardSpecialtiesList>
      </CompanyCardSpecialtiesContainer>
    </CompanyCardRow>
  </CompanyCardContainer>
);
