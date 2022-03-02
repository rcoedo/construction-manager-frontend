import React from "react";
import { default as ReactSelect, MultiValue, StylesConfig } from "react-select";
import { Specialty } from "../../../interfaces";

interface Option {
  label: string;
  value: string;
}

export const toOption = (specialty: Specialty): Option => ({ label: specialty, value: specialty });

const styles: StylesConfig<Option, true> = {
  control: (provided, state) => ({
    ...provided,
    padding: 0,
    color: "black",
    border: "2px solid black",
    borderRadius: "3px",
    width: "100%",
    fontSize: "16px",
    outline: "none",
    ...(state.isFocused ? { boxShadow: "4px 4px 0px -1px steelblue", background: "azure" } : {}),
    ":hover": {
      cursor: "pointer",
      borderColor: "black",
      boxShadow: "4px 4px 0px -1px steelblue",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? "bold" : "normal",
    color: state.isFocused ? "white" : "black",
    backgroundColor: state.isFocused ? "black" : "white",
    fontSize: "16px",
    ":hover": {
      cursor: "pointer",
      backgroundColor: "black",
    },
  }),
  menuList: (provided, state) => ({
    border: "2px solid black",
    borderRadius: "3px",
  }),
};

interface SpecialtyFilterSelectProps {
  value: Option[];
  options: Option[];
  isLoading: boolean;
  onChange: (options: MultiValue<Option>) => void;
}

export type SpecialtyFilterSelectOnChangeHandler = (options: MultiValue<Option>) => void;

export const SpecialtyFilterSelect: React.FC<SpecialtyFilterSelectProps> = ({ value, options, isLoading, onChange }) => {
  return (
    <ReactSelect
      placeholder="filter"
      value={value}
      isLoading={isLoading}
      options={options}
      onChange={onChange}
      isMulti={true}
      controlShouldRenderValue={false}
      styles={styles}
    />
  );
};
