import { TShirt } from "phosphor-react";

interface PropsCardCategoria{
    name: string;
}

export function CardCategoria({name}: PropsCardCategoria){
    return (
        <li className="flex items-center px-2 py-2 rounded-3xl gap-2 bg-slate-50 drop-shadow-md text-zinc-800">
            <div className="rounded-full bg-sky-400 drop-shadow-xl p-2 text-white">
                <TShirt size={30}/>
            </div>
            <p className="text-xl pr-2 font-semibold">
                {name}
            </p>
        </li>
    )
}