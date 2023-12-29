import { CodesandboxLogo } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

export function Header(){
    const [pesquisa, setPesquisa] = useState<string>('')


    return(
        <header className='bg-sky-600 text-white pb-10 w-full'>
            <div className='flex gap-1 items-center px-10 py-4'>
                <CodesandboxLogo size={30}/> 
                <p className='text-xl font-bold'>
                    VetorBox
                </p>
            </div>
            <div className='w-full py-4 flex flex-col items-center'>
                <h1 className='font-bold text-6xl'>
                    Vetorizando o mundo!
                </h1>
                <h2 className='text-center mt-1'>
                    Descarregue vetores e uniformes gratuitos para os seus projetos.<br/>
                    Formatos SVG, EPS, CDR.
                </h2>
                <div className='bg-white w-[50%] flex items-center mt-4 rounded-md h-10 overflow-hidden drop-shadow-sm shadow-md'>
                    <input
                      className='w-full bg-transparent h-full px-4 text-black'
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPesquisa(e.target.value) }
                      value={pesquisa}
                      type="text" 
                      name="" 
                      id=""
                    />
                    <a href={`/search/${pesquisa}`} className='bg-sky-400 h-full px-4'>
                        Pesquisar
                    </a>
                </div>
            </div>
        </header>
    )
}