import React, { useCallback } from "react";
import styled from "styled-components";
import { useAppState } from "../../../hooks";
import { Specialty } from "../../../interfaces";
import { Breakpoint } from "../../../utils";
import { NameFilterInput, NameFilterInputOnChangeHandler } from "./NameFilterInput";
import { SpecialtyFilterLabels } from "./SpecialtyFilterLabels";
import { SpecialtyFilterSelect, SpecialtyFilterSelectOnChangeHandler, toOption } from "./SpecialtyFilterSelect";

const FilterControlsContainer = styled.div`
  @media only screen and ${Breakpoint.LG} {
    flex-direction: row;
  }
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  row-gap: 0.5em;
  flex-wrap: wrap;
  font-size: 1em;
`;

const NameFilterInputContainer = styled.div`
  width: 100%;
  flex-basis: 70%;
`;

const SpecialtyFilterSelectContainer = styled.div`
  width: 100%;
  flex-basis: 25%;
  flex-grow: 1;
`;

export const FilterControls = () => {
  const {
    isLoading,
    specialties,
    filters: { name, specialties: specialtiesFilter },
    actions: { setNameFilter, setSpecialtiesFilter, removeSpecialtiesFilter },
  } = useAppState();

  const handleSearchInputChange = useCallback<NameFilterInputOnChangeHandler>(
    (event) => {
      setNameFilter(event.target.value);
    },
    [setNameFilter],
  );

  const handleFilterSelectChange = useCallback<SpecialtyFilterSelectOnChangeHandler>(
    (options) => {
      setSpecialtiesFilter(options.map((option) => option.value as Specialty));
    },
    [setSpecialtiesFilter],
  );

  return (
    <FilterControlsContainer>
      <NameFilterInputContainer>
        <NameFilterInput value={name} onChange={handleSearchInputChange} />
      </NameFilterInputContainer>
      <SpecialtyFilterSelectContainer>
        <SpecialtyFilterSelect
          value={specialtiesFilter.map(toOption)}
          isLoading={isLoading}
          options={specialties.map(toOption)}
          onChange={handleFilterSelectChange}
        />
      </SpecialtyFilterSelectContainer>
      <SpecialtyFilterLabels value={specialtiesFilter} onLabelClick={removeSpecialtiesFilter} />
    </FilterControlsContainer>
  );
};
