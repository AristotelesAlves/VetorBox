import React, { useState } from 'react';
import { BoxCategory } from './BoxCategory';
import placeholderIMG from '../assets/placeholderIMG.jpg';

export function Vetor() {

  const [vetorData, setVetorData] = useState({
    categorias: [],
    nomeVetor: '',
    svg: '',
    eps: '',
    png: '',
    imagem: '',
  });

  return (
    <div className='flex gap-5 py-4 justify-center px-20 '>
      <div className='w-[40%] p-2 bg-white rounded-md drop-shadow-md'>
        <div className=''>
          <img src={vetorData.imagem.length <= 0 ? placeholderIMG : vetorData.imagem} className='rounded-md' alt='' />
        </div>
        <div className='flex flex-col'>
          <strong>{vetorData.nomeVetor}</strong>
          <strong>Downloads: 0</strong>
          <strong>Categorias:</strong>
          <div className='w-full flex flex-wrap gap-2 items-center mt-2'>
            {vetorData.categorias.map((categoria, index) => (
              <BoxCategory name={categoria} key={index} />
            ))}
          </div>
        </div>
      </div>

      <form action='' className='w-full'>
        <div className='p-2 bg-white rounded-md drop-shadow-md'>
          <div className='w-full gap-1 flex flex-col'>
            <label>Nome:</label>
            <input
              className='border-none focus:outline-none w-[40%]'
              type='text'
              placeholder='Nome do vetor'
              value={vetorData.nomeVetor}
              onChange={(e) => setVetorData({ ...vetorData, nomeVetor: e.target.value })}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Imagem:</label>
            <input
              className='border-none focus:outline-none w-[40%]'
              type='text'
              placeholder='URL da imagem de exposição...'
              value={vetorData.imagem}
              onChange={(e) => setVetorData({ ...vetorData, imagem: e.target.value })}
            />
          </div>
          <div className='flex gap-1 items-center'>
            <label>Categoria:</label>
            <input
              type='text'
              className='border-none focus:outline-none w-[40%]'
              placeholder='Categorias'
              onChange={() => (null)}
            />
          </div>
        </div>
        <div>
          <button>Salvar</button>
          <button>Adicionar</button>
        </div>
      </form>
    </div>
  );
}
