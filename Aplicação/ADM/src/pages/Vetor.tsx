import React, { useEffect, useState } from 'react';
import placeholderIMG from '../assets/placeholderIMG.jpg';
import { EncurtaNet } from '../service/EncurtaNet';
import { VetoresServices } from '../service/VetoresServices';
import { useParams } from 'react-router-dom';
import { SelectCategoria } from '../components/SelectCategoria';

interface IVetor {
  Category: string[];
  URL_EPS: string;
  URL_IMG: string;
  URL_PNG: string;
  URL_SVG: string;
  shortURLSVG: string;
  shortURLEPS: string;
  shortURLPNG: string;
  Downloads: number;
  Nome: string;
  ID_Usuario: number;
}

export function Vetor() {

  const slug = useParams()
  const id = slug.id !== undefined ? slug.id : ''

  const [vetorData, setVetorData] = useState<IVetor>({
    Category: [''],
    URL_EPS: '',
    URL_IMG: '',
    URL_PNG: '',
    URL_SVG: '',
    Downloads: 0,
    shortURLSVG: '',
    shortURLEPS: '',
    shortURLPNG: '',
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
        const result = await service.showOne(id);

        if(result === 'Vetor não encontrado'){
          return
        }

        setVetorData({...vetorData,
          Downloads: result.Downloads,
          Category: result.Category,
          ID_Usuario: result.ID_Usuario,
          Nome: result.Nome,
          URL_EPS: result.URL_EPS,
          URL_IMG: result.URL_IMG,
          URL_PNG: result.URL_PNG,
          URL_SVG: result.URL_SVG,
        })
      } catch (error) {
        console.error('Erro ao obter vetores:', error);
      }
    };

    fetchData();
  },);

  async function handleSubmit() {
    try {
      const service = new VetoresServices();
      const result = await service.Create(vetorData);
      console.log(result)
      setVetorData(result)
      result ? window.alert('Enviado com sucesso!') : null
    } catch (error) {
      console.error('Erro ao obter vetores:', error);
    }
    console.log(vetorData);
  }

  async function handleBlur(urlKey: string, type: string) {
    const url = await EncurtaNet(urlKey);
    setVetorData({ ...vetorData, [type]: url.shortenedUrl });
  }

  return (
    <div className='flex gap-5 py-4 justify-center px-20'>
      <div className='w-[40%] overflow-hidden p-2 bg-white rounded-md drop-shadow-md h-fit'>
        <div>
          <img src={vetorData.URL_PNG.length > 0 ? vetorData.URL_PNG : placeholderIMG } className='rounded-md w-full' alt='' />
        </div>
        <div className='flex flex-col'>
          <strong>Nome: {vetorData.Nome}</strong>
          <strong>URL PNG: {vetorData.shortURLEPS}</strong>
          <strong>URL EPS: {vetorData.shortURLPNG}</strong>
          <strong>URL SVG: {vetorData.shortURLSVG}</strong>
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
          <SelectCategoria/>
          {/* <div className='w-full gap-1 flex flex-col'>
            <label>Categorias:</label>
            <div className='w-full px-2 py-1 border border-zinc-400 rounded-md'>
              <select name='categorias' className='w-full'></select>
            </div>
          </div> */}
          
        </div>

        <div className='w-full flex items-center justify-end px-5 py-3'>
          <button type="button" onClick={handleSubmit}>
            {id == "novo-vetor" ? "Adicionar" : "Salvar"}
          </button>
        </div>

      </form>
    </div>
  );
}
