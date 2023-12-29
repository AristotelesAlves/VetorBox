import React, { useState } from 'react';

export function NovoVetores() {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [nomeVetor, setNomeVetor] = useState<string>('');
  const [urlSVG, setUrlSVG] = useState<string>('');
  const [urlEPS, setUrlEPS] = useState<string>('');
  const [urlPNG, setUrlPNG] = useState<string>('');
  const [novaCategoria, setNovaCategoria] = useState<string>('');
  const [expot, setExpo] = useState<string>('');

  const adicionarCategoria = () => {
    if (novaCategoria.trim() !== '') {
      setCategorias([...categorias, novaCategoria]);
      setNovaCategoria('');
    }
  };

  return (
    <div className='flex gap-5 py-4 px-2'>
        <div className='flex flex-col gap-1 items-center w-[450px]'>
            <div className=''>
                <img src={expot} className='w-[400px] h-[400px] rounded-md' alt="" />
            </div>
            <div>
                <h1>
                    {nomeVetor}
                </h1>
                <div className='w-full flex flex-wrap gap-2 items-center mt-2'>
              {categorias.map((categoria, index) => (
                <div key={index} className="px-2 py-1 rounded-sm drop-shadow-md bg-sky-600 text-zinc-100">
                  {categoria}
                </div>
              ))}
              </div>
            </div>
        </div>
      <form action="" className='w-full'>
        <div className='flex flex-col'>
          <label>Nome</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome do vetor"
            value={nomeVetor}
            onChange={(e) => setNomeVetor(e.target.value)}
          />
          <label>Imagem de exposição</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome do vetor"
            value={expot}
            onChange={(e) => setExpo(e.target.value)}
          />
          <label>URL SVG</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="URL SVG"
            value={urlSVG}
            onChange={(e) => setUrlSVG(e.target.value)}
          />
          <label>URL EPS</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="URL EPS"
            value={urlEPS}
            onChange={(e) => setUrlEPS(e.target.value)}
          />
          <label>URL PNG</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="URL PNG"
            value={urlPNG}
            onChange={(e) => setUrlPNG(e.target.value)}
          />
          <p>Categoria</p>
          <div className='flex gap-2'>
            <input
              type="text"
              name=""
              id=""
              placeholder="Categorias"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
            />
            <button type="button" onClick={adicionarCategoria}>
              Adicionar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
