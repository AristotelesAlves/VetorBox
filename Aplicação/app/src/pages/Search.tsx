import { CodesandboxLogo, MagnifyingGlass, X } from "phosphor-react";
import { DadosIMG } from "../service/JSON";
import { BoxImg } from "../components/BoxImg";
import { useState } from "react";
import { Modal } from "../components/Modal/Index";

export function Search(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ImageModal, setImageModal] = useState('');
    const [NomeVetor, setNomeVetor] = useState('');
    const [categorias, setcategorias] = useState<string[]>([]);
    const [linkDownload, setlinkDownload] = useState('');
    const [relacionados, setrelacionados] = useState<string[]>([]);

    const handleModalClose = () => {
        console.log('Modal closed!');
        // Your custom logic here
      };
  
    return(
        <section className="flex flex-col h-full bg-zinc-300">
            <Modal 
              ImageModal={ImageModal} 
              NomeVetor={NomeVetor} 
              categorias={categorias} 
              linkDownload={linkDownload} 
              relacionados={relacionados} 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              onModalClose={handleModalClose} 
            />
            <header className="flex w-full px-3 py-2 gap-4 fixed z-20 bg-zinc-300 items-center">
                <div className="flex">
                    <CodesandboxLogo size={30}/>
                    <h1 className=" font-bold text-2xl">
                        VetorBox
                    </h1>
                </div>
                <form className="flex flex-1 gap-3">
                    <div className="w-full flex rounded-lg gap-1  p-2 bg-white drop-shadow-xl" >
                        <input className="w-full bg-transparent"
                          type="text" />
                        <button>
                            <X/>
                        </button>
                    </div>
                    <button className="flex items-center gap-2 font-bold px-3 py-1 rounded-lg bg-sky-600 text-white drop-shadow-xl">
                        Pesquisar
                        <MagnifyingGlass size={25} weight="bold"/>
                    </button>
                </form>
            </header>
            <section className="mt-16">
                <div className='columns-3xs w-full px-3 z-0 flex-1 flex-col'>
                    {DadosIMG.map((mg) => {
                        function handleClick(){
                            setImageModal(mg.ImageModal)
                            setNomeVetor(mg.NomeVetor)
                            setcategorias(mg.categorias)
                            setlinkDownload(mg.linkDownload) 
                            setrelacionados(mg.relacionados)
                            setIsModalOpen(true)
                        }
                        return (
                            <button className="w-full h-full" onClick={handleClick}>
                                <BoxImg src={mg.ImageModal}/>
                            </button>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}