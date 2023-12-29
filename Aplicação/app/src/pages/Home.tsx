import { BoxImg } from "../components/BoxImg";
import { Header } from "../components/Header";
import { CardCategoria } from "../components/CardCategoria";
import { Modal } from "../components/Modal/Index";
import { useState } from "react";
import { DadosIMG } from "../service/JSON";

export function Home(){

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


    return (    
        <section className="h-screen">
            <Header/>
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
            <div className="w-full flex items-center py-4 justify-center">
                <ul className="flex gap-5 flex-wrap items-center justify-center">
                    <CardCategoria name="Flores"/>
                    <CardCategoria name="Uniformes"/>
                    <CardCategoria name="Animais"/>
                    <CardCategoria name="Religioso"/>
                    <CardCategoria name="Camisas"/>
                    <CardCategoria name="Arabesco"/>
                    <CardCategoria name="Escudos"/>
                </ul>
            </div>
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
            <div className="w-full h-[200px] from-white bg-gradient-to-t  z-20 -mt-44 flex justify-center items-center relative">
                
            </div>
            <div className="w-full h-11 flex justify-center items-center">
                <button className="px-5 text-xl bg-sky-400 h-full rounded-lg font-semibold text-white drop-shadow-md shadow-lg shadow-sky-200">
                    Carregar mais vetores!
                </button>
            </div>
            <footer className="w-full h-[200px] bg-sky-500 mt-12">
                
            </footer>
        </section>
    )
}
