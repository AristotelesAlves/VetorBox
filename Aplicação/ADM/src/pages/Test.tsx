import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { CategoriaService } from '../service/CategoriaService';

interface Categoria {
  ID_Categoria: number;
  Nome: string;
}

export function Test() {
  const [options, setOptions] = useState<Array<{ value: string; label: string; }>>([]);

  const handleCreate = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    
    // Verifica se a opção já existe no estado antes de adicioná-la
    if (!options.some((option) => option.value === newOption.value)) {
      setOptions((prevOptions) => [...prevOptions, newOption]);
    }
  };

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div>
      <h1>React Select Example</h1>
      <CreatableSelect
        isMulti
        isClearable
        options={options}
        onChange={(selectedOptions) => console.log('Selected Options:', selectedOptions)}
        onCreateOption={handleCreate}
      />
    </div>
  );
}
