import { ChangeEvent } from "react";
import styled from "styled-components";

export const NameFilterInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0.5em 1em;
  font-size: 16px;
  border: 2px solid;
  border-radius: 3px;
  &:focus {
    outline: none;
    background: azure;
    box-shadow: 4px 4px 0px -1px steelblue;
  }
  &:hover {
    box-shadow: 4px 4px 0px -1px steelblue;
  }
`;

export type NameFilterInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
