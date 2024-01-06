import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

export function SelectCategoria() {
  const [options, setOptions] = useState([
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ]);

  const handleCreate = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions, newOption];
      return updatedOptions;
    });
    
  };

  const formatCreateLabel = (inputValue: string) => `Criar "${inputValue}"`;

  return (
    <div>
      <h1>Categorias:</h1>
      <CreatableSelect
        isMulti
        isClearable
        options={options}
        onChange={(selectedOptions) => console.log('Selected Options:', selectedOptions)}
        onCreateOption={handleCreate}
        formatCreateLabel={formatCreateLabel}
        placeholder={'Carro, Moto, Galinha...'}
      />
    </div>
  );
}
