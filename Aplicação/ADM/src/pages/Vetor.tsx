import React, { useEffect, useState } from 'react';
import placeholderIMG from '../assets/placeholderIMG.jpg';
import { EncurtaNet } from '../service/EncurtaNet';
import { VetoresServices } from '../service/VetoresServices';
import { useParams } from 'react-router-dom';
import { SelectCategoria } from '../components/SelectCategoria';
import { MultiValue } from 'react-select';

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

interface OptionType {
  value: string;
  label: string;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const service = new VetoresServices();
        const result = await service.showOne(id);
        if(result === 'Vetor não encontrado'){
          
          return
        }

        const resultCategorias : Array<{ ID_Categoria: number; Nome: string }> = result.categorias

        setVetorData({...vetorData,
          ID_Usuario:1,
          Nome: result.Nome,
          shortURLEPS: result.shortURLEPS,
          shortURLPNG: result.shortURLPNG,
          shortURLSVG: result.shortURLSVG,
          URL_EPS: result.URL_EPS,
          URL_IMG: result.URL_IMG,
          URL_PNG: result.URL_PNG,
          URL_SVG: result.URL_SVG,
          Category: resultCategorias.map(m => m.Nome)
        })
      } catch (error) {
        console.error('Erro ao obter vetores:', error);
      }
    };

    fetchData();
  },[]);

  async function handleSubmit() {
    try {
      const service = new VetoresServices();
      const result = await service.Create(vetorData);
      console.log(result)
      setVetorData(result)
      result ? window.alert('Enviado com sucesso!') : null
      console.log(vetorData)
    } catch (error) {
      console.error('Erro ao obter vetores:', error);
    }
    console.log(vetorData);
  }

  async function handleBlur(urlKey: string, type: string) {
    const url = await EncurtaNet(urlKey);
    setVetorData({ ...vetorData, [type]: url.shortenedUrl });
  }

  function handleSelectChage(props: MultiValue<OptionType>){
    const result = props.map(value => value.label)
    setVetorData({...vetorData, Category: result})
  }

  return (
    <div className='flex gap-5 py-4 justify-center px-20 max-lg:flex-col'>
      <div className='w-[40%] overflow-hidden p-2 bg-white rounded-md drop-shadow-md h-fit'>
        <div>
          <img src={vetorData.URL_IMG.length > 0 ? vetorData.URL_IMG : placeholderIMG } className='rounded-md w-full' alt='' />
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
              className=' w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='Nome do vetor'
              value={vetorData.Nome}
              onChange={(e) => setVetorData({ ...vetorData, Nome: e.target.value })}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Imagem:</label>
            <input
              className=' w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL da imagem de exposição...'
              value={vetorData.URL_IMG}
              onChange={(e) => setVetorData({ ...vetorData, URL_IMG: e.target.value })}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url SVG:</label>
            <input
              className=' w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato SVG'
              value={vetorData.URL_SVG}
              onChange={(e) => setVetorData({ ...vetorData, URL_SVG: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_SVG, 'shortURLSVG')}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Url EPS:</label>
            <input
              className=' w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato EPS'
              value={vetorData.URL_EPS}
              onChange={(e) => setVetorData({ ...vetorData, URL_EPS: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_EPS, 'shortURLEPS')}
            />
          </div>

          <div className='w-full gap-1 flex flex-col'>
            <label>Url PNG:</label>
            <input
              className=' w-full px-2 py-1 border border-zinc-400 rounded-md'
              type='text'
              placeholder='URL de download no formato PNG'
              value={vetorData.URL_PNG}
              onChange={(e) => setVetorData({ ...vetorData, URL_PNG: e.target.value })}
              onBlur={() => handleBlur(vetorData.URL_PNG, 'shortURLPNG')}
            />
          </div>
          <div className='w-full gap-1 flex flex-col'>
            <label>Url PNG:</label>
            <SelectCategoria select={vetorData.Category.map(category => {return {value: category, label: category}})} onValueChange={handleSelectChage}/>
          </div>
        </div>

        <div className='w-full flex items-center justify-end px-5 py-3 gap-4'>
          <a className='rounded-md text-white bg-red-500 shadow-md px-3 py-2' href='/'>
            Cancelar
          </a>
          <button className='rounded-md text-white bg-sky-600 shadow-md px-3 py-2' type="button" onClick={id == "novo-vetor" ? handleSubmit : () => window.alert('Desculpa ainda não esta funcionando! otario!')}>
            {id == "novo-vetor" ? "Adicionar" : "Salvar modificação"}
          </button>
        </div>
      </form>
    </div>
  );
}
