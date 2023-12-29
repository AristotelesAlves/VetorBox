import { CodesandboxLogo } from "phosphor-react";

export function SliderBar(){


    return(
        <nav className="h-full w-[10%] border-r bg-sky-600 text-white px-3">
            <div className="w-full text-center py-2">
                <h1 className="font-bold text-xl flex items-center">
                    <CodesandboxLogo size={30}/> 
                    VetorBox
                </h1>
            </div>
            <ul className="w-full">
                <li className="w-full font-semibold text-white">
                    <a href="">Vetores</a>
                </li>
                <li className="w-full font-semibold text-white">
                    <a href="/novo-vetor">Novo vetor</a>
                </li>
                <li>
                    Rank
                </li>
            </ul>
        </nav>
    )
}