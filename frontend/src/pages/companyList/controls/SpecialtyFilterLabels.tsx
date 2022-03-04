import React from "react";
import styled from "styled-components";
import { Specialty } from "../../../interfaces";

const SpecialtyFilterLabelsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const SpecialtyLabel = styled.div`
  border: 2px solid;
  border-radius: 3px;
  padding: 0.5em;
  &:hover {
    text-decoration: 3px line-through;
    background: orangered;
    cursor: pointer;
  }
`;

export type SpecialtyFilterLabelOnClickHandler = (specialty: Specialty) => void;

interface SpecialtyFilterLabelsProps {
  value: Specialty[];
  onLabelClick: SpecialtyFilterLabelOnClickHandler;
}

export const SpecialtyFilterLabels: React.FC<SpecialtyFilterLabelsProps> = ({ value, onLabelClick: handleLabelClick }) => {
  return (
    <SpecialtyFilterLabelsContainer>
      {value.map((specialty) => (
        <SpecialtyLabel
          key={specialty}
          onClick={() => {
            handleLabelClick(specialty);
          }}
        >
          {specialty}
        </SpecialtyLabel>
      ))}
    </SpecialtyFilterLabelsContainer>
  );
};
