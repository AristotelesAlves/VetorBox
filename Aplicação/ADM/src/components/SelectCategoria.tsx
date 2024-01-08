import React, { useEffect, useState } from 'react';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { CategoriaService } from '../service/CategoriaService';

interface OptionType {
  value: string;
  label: string;
}

interface Categoria {
  ID_Categoria: number;
  Nome: string;
}

interface ISelectCategoria {
  onValueChange: (newValue: MultiValue<OptionType>) => void;
  select: MultiValue<OptionType>;
}

export function SelectCategoria({ onValueChange, select }: ISelectCategoria) {
  const [options, setOptions] = useState<Array<{ value: string; label: string; }>>([]);
  
  const [selectedValues, setSelectedValues] = useState<MultiValue<OptionType>>(select);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSelectedValues(select);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [select]);

  const fetchData = async () => {
    try {
      const service = new CategoriaService();
      const result: Categoria[] = await service.vetores();

      // Mapeia as novas categorias
      const categorias = result.map((categoria) => ({
        value: categoria.Nome,
        label: categoria.Nome,
      }));
      
      // Limpa o estado antes de adicionar as novas categorias
      setOptions(categorias);
    } catch (error) {
      console.error('Erro ao obter vetores:', error);
    }
  };

  const handleChange = (newValue: MultiValue<OptionType>) => {
    setSelectedValues(newValue);
  };

  const handleCreate = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    
    if (!options.some((option) => option.value === newOption.value)) {
      setOptions((prevOptions) => [...prevOptions, newOption]);
      setSelectedValues([...selectedValues, newOption]);
      onValueChange([...selectedValues, newOption]);
    }
  };

  

  useEffect(() => {
    onValueChange(selectedValues);
  }, [selectedValues]);

  useEffect(() => {
    fetchData();
  }, []);

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
