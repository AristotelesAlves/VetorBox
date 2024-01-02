import { X } from "phosphor-react";

export function BoxCategory(props : {name: string}) {
    return (
        <div className="rounded-sm drop-shadow-md text-zinc-100 flex items-center rounded-lg  overflow-hidden drop-shadow-md">
            <div className="bg-yellow-50 h-full h-full flex items-center justify-center py-1 text-black px-2">
                <X size={20} weight="duotone"/>
            </div>
            <p className="px-2 py-1 bg-sky-600">
                {props.name}
            </p>
        </div>
    );
}
