import { X } from "phosphor-react";

export function BoxCategory(props : {name: string}) {
    return (
        <div className="rounded-sm drop-shadow-md bg-zinc-300 h-full text-zinc-100 flex items-center  overflow-hidden">
            <div className=" flex items-center justify-center py-1 text-black px-2">
                <X size={20} weight="duotone"/>
            </div>
            <p className="px-2 py-1 bg-sky-600">
                {props.name}
            </p>
        </div>
    );
}
