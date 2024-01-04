import React, { useEffect, useState } from 'react';
import placeholderIMG from '../assets/placeholderIMG.jpg';
import { Check } from 'phosphor-react';
import { EncurtaNet } from '../service/EncurtaNet';
import { VetoresServices } from '../service/VetoresServices';

interface IVetor {
  Category: string[];
  URL_EPS: string;
  URL_IMG: string;
  URL_PNG: string;
  URL_SVG: string;
  Downloads: number;
  Nome: string;
  ID_Usuario: number;
}

export function Vetor() {
  const [vetorData, setVetorData] = useState<IVetor>({
    Category: [''],
    URL_EPS: '',
    URL_IMG: '',
    URL_PNG: '',
    URL_SVG: '',
    Downloads: 0,
    Nome: '',
    ID_Usuario: 1,
  });

  const [shortenedUrl, setShortenedUrl] = useState({
    svg: '',
    eps: '',
    png: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const service = new VetoresServices();
        const result = await service.showOne('ds'); // caso não encontre, retorna a mensagem "Vetor não encontrado"
        console.log(result);
      } catch (error) {
        console.error('Erro ao obter vetores:', error);
      }
    };

    fetchData();
  }, []); // Corrigi a vírgula aqui, removendo a vírgula extra.

  async function handleSubmit() {
    try {
      const service = new VetoresServices();
      const result = await service.Create(vetorData);
      console.log(result)
      // setVetorData(result)
      // result ? window.alert('Enviado com sucesso!') : null
    } catch (error) {
      console.error('Erro ao obter vetores:', error);
    }
    console.log(vetorData);
  }

  async function handleBlur(urlKey: string, type: string) {
    const url = await EncurtaNet(urlKey);
    setShortenedUrl({ ...shortenedUrl, [type]: url.shortenedUrl });
    console.log(shortenedUrl);
  }

  return (
    <div className='flex gap-5 py-4 justify-center px-20'>
      <div className='w-[40%] overflow-hidden p-2 bg-white rounded-md drop-shadow-md h-fit'>
        <div>
          <img src={vetorData.URL_PNG.length ? placeholderIMG : vetorData.URL_PNG} className='rounded-md' alt='' />
        </div>
        <div className='flex flex-col'>
          <strong>Nome: {vetorData.Nome}</strong>
          <strong>URL PNG: {shortenedUrl.png}</strong>
          <strong>URL EPS: {shortenedUrl.eps}</strong>
          <strong>URL SVG: {shortenedUrl.svg}</strong>
          <strong>Downloads: 0</strong>
        </div>
      </div>
      <form action='' className='w-full' onSubmit={handleSubmit}>
        <div className='p-2 bg-white rounded-md drop-shadow-md'>
          <div className='w-full gap-1 flex flex-col'>
            <label>Nome:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='Nome do vetor'
              value={vetorData.Nome}
              onChange={(e) => setVetorData({ ...vetorData, Nome: e.target.value })}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Imagem:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL da imagem de exposição...'
              value={vetorData.URL_IMG}
              onChange={(e) => setVetorData({ ...vetorData, URL_IMG: e.target.value })}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url SVG:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato SVG'
              value={vetorData.URL_SVG}
              onChange={(e) => setVetorData({ ...vetorData, URL_SVG: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_SVG, 'svg')}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Url EPS:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato EPS'
              value={vetorData.URL_EPS}
              onChange={(e) => setVetorData({ ...vetorData, URL_EPS: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_EPS, 'eps')}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url PNG:</label>
            <input
              className='focus:outline-none w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato PNG'
              value={vetorData.URL_PNG}
              onChange={(e) => setVetorData({ ...vetorData, URL_PNG: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_PNG, 'png')}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Categorias:</label>
            <div className='w-full px-2 py-1 border border-zinc-400 rounded-md'>
              <select name='categorias' className='w-full'></select>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-end px-5 py-3'>
          <button type="button" onClick={handleSubmit}>Adicionar</button>
        </div>
      </form>
    </div>
  );
}
