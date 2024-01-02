import { CodesandboxLogo } from "phosphor-react";

export function SliderBar(){


    return(
        <nav className="w-[80%] m-auto my-4 rounded-md justify-between border-r bg-sky-600 text-white px-3 flex items-center">
            <div className="text-center py-2">
                <h1 className="font-bold text-xl flex items-center">
                    <CodesandboxLogo size={30}/> 
                    VetorBox
                </h1>
            </div>
            <ul className="flex items-center gap-10 px-5">
                <li className="font-semibold text-white">
                    <a href="">Galeria</a>
                </li>
                <li className="font-semibold text-white">
                    <a href="">Vetores</a>
                </li>
                <li className="font-semibold text-white">
                    <a href="">Rank</a>
                </li>
            </ul>
        </nav>
    )
}