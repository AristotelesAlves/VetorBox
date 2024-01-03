import React, { useState } from 'react';
import { BoxCategory } from './BoxCategory';
import placeholderIMG from '../assets/placeholderIMG.jpg';
import { Check } from 'phosphor-react';

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
      <div className='w-[40%] overflow-hidden p-2 bg-white rounded-md drop-shadow-md h-fit'>
        <div className=''>
          <img src={vetorData.imagem.length <= 0 ? placeholderIMG : vetorData.imagem} className='rounded-md' alt='' />
        </div>
        <div className='flex flex-col'>
          <strong>Nome: {vetorData.nomeVetor}</strong>
          <strong>Id:</strong>
          <strong>Downloads: 0</strong>
          <strong>Categorias:</strong>
          <div className='w-full flex flex-wrap gap-2 items-center mt-2'>
            {vetorData.categorias.map((categoria, index) => (
              <BoxCategory name={categoria} key={index} />
            ))}
            <BoxCategory name='Testando'/>
          </div>
        </div>
      </div>

      <form action='' className='w-full'>
        <div className='p-2 bg-white rounded-md drop-shadow-md'>
          <div className='w-full gap-1 flex flex-col'>
            <label>Nome:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='Nome do vetor'
              value={vetorData.nomeVetor}
              onChange={(e) => setVetorData({ ...vetorData, nomeVetor: e.target.value })}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Imagem:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL da imagem de exposição...'
              value={vetorData.imagem}
              onChange={(e) => setVetorData({ ...vetorData, imagem: e.target.value })}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url SVG:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato SVG'
              value={vetorData.svg}
              onChange={(e) => setVetorData({ ...vetorData, svg: e.target.value })}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Url EPS:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato EPS'
              value={vetorData.eps}
              onChange={(e) => setVetorData({ ...vetorData, eps: e.target.value })}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url PNG:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato PNG'
              value={vetorData.png}
              onChange={(e) => setVetorData({ ...vetorData, png: e.target.value })}
            />
          </div>
          

          <div className='w-full gap-1 flex flex-col'>
            <label>Categorias:</label>

            <div className=' border-zinc-400 border rounded-md'>
              <div className='px-2 py-1 flex w-full items-center justify-between'>
                <input
                  type='text'
                  className='focus:outline-none w-full'
                  placeholder='Carro, Moto, Animais, Natureza...'
                  value={vetorData.png}
                  onChange={(e) => setVetorData({ ...vetorData, png: e.target.value })}
                />
                <button>
                  <Check size={24}/>
                </button>
              </div>
              <ul className='px-2 py-1'>
                  <li className='border-b w-full'>
                    Adicionar
                  </li>
                  <li className='border-b w-full'>
                    Carro
                  </li>
                  <li className='border-b w-full'>
                    Carro
                  </li>
                  <li className='border-b w-full'>
                    Carro
                  </li>
                  <li className='w-full'>
                    Carro
                  </li>
                </ul>
            </div>

          </div>
        </div>
        <div className='w-full flex items-center justify-end px-5 py-3'>
          <button>Adicionar</button>
        </div>
      </form>
    </div>
  );
}
