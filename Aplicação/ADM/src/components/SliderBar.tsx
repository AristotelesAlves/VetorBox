import { CodesandboxLogo, MagnifyingGlass } from "phosphor-react";
import { useLocation } from 'react-router-dom';

export function SliderBar(){
    const { pathname } = useLocation();
    return(
        <nav className="w-[80%] m-auto my-4 rounded-md justify-between border-r bg-sky-600 text-white px-3 flex items-center">
            <div className="text-center py-2 pr-4">
                <h1 className="font-bold text-xl flex items-center">
                    <CodesandboxLogo size={30}/> 
                    VetorBox
                </h1>
            </div>
            <div className={`flex-1 bg-white px-2 py-1 rounded-sm flex items-center justify-between text-black ${pathname.includes('/vetor/pin/') ? 'hidden' : null }`}>
                <input type="text" placeholder="Nome do vetor ou palavra chave..." className="w-full focus:outline-none"/>
                <div className="border-l border-zinc-400 py-1 pl-2 pr-1">
                    <MagnifyingGlass/>
                </div>
            </div>
            <ul className="flex items-center gap-10 px-5">
                <li className="font-semibold text-white">
                    <a href="/vetores">Galeria</a>
                </li>
                <li className="font-semibold text-white">
                    <a href="/rank">Rank</a>
                </li>
                <li className="font-semibold text-white">
                    <a href="/vetor/pin/novo-vetor">Adicionar vetor</a>
                </li>
            </ul>
        </nav>
    )
}