import React, { useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';

interface OptionType {
  value: string;
  label: string;
}

interface ISelectCategoria {
  onValueChange: (newValue: MultiValue<OptionType>) => void;
}

export function SelectCategoria({ onValueChange }: ISelectCategoria) {
  const [options, setOptions] = useState<OptionType[]>([
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ]);

  const [selectedValues, setSelectedValues] = useState<MultiValue<OptionType>>([]);

  const handleChange = (newValue: MultiValue<OptionType>) => {
    setSelectedValues(newValue);
  };

  const handleCreate = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions([...options, newOption]);
    setSelectedValues([...selectedValues, newOption]);
    onValueChange(selectedValues)
  };

  useEffect(() => {
    onValueChange(selectedValues);
  }, [selectedValues]);

  return (
    <CreatableSelect
      isMulti
      options={options}
      value={selectedValues}
      onChange={handleChange}
      onCreateOption={handleCreate}
      formatCreateLabel={(inputValue: string) => `Criar "${inputValue}"`}
      styles={{
        control: (provided) => ({
          ...provided,
          border: '1px solid #a0aec0',
          borderRadius: '0.375rem',
          minHeight: '38px',
        }),
        multiValue: (provided) => ({
          ...provided,
          backgroundColor: '#a0aec0',
          color: 'white',
          text: 'white',
        }),
        input: (provided) => ({
          ...provided,
          margin: '0px',
          outline: '2px solid transparent',
          outlineOffset: '2px',
        }),
        placeholder: (provided) => ({
          ...provided,
          margin: '0px',
        }),
      }}
    />
  );
}
