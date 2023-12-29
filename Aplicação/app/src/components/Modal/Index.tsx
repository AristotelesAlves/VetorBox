import { X } from 'phosphor-react';
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModalClose: () => void;
  NomeVetor: string;
  ImageModal: string;
  linkDownload: string;
  relacionados: Array<string>;
  categorias: Array<string>;
}

export function Modal({ 
    isOpen, 
    onClose, 
    onModalClose, 
    ImageModal,
    NomeVetor,
    categorias,
    linkDownload,
    relacionados}: ModalProps){

    useEffect(() => {
      if (!isOpen) {
        onModalClose();
      }
    }, [isOpen, onModalClose]);

  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen bg-black fixed backdrop-blur-sm  z-30 top-0 left-0 bg-opacity-40 transition duration-300 ease-in-out transform flex items-center justify-center">
          <div className="bg-white h-[70%] flex rounded-lg drop-shadow-lg">
            <div className='h-full p-5 rounded-lg overflow-hidden'>
                <img src={ImageModal} className='h-full rounded-lg overflow-hidden'  alt="" />
            </div>
            <div className='flex-1 py-5 pr-5 min-w-[300px] h-full'>
                <header className=''>
                    <div className=' flex justify-between items-start pb-3'>
                        <div>
                            <h1 className='font-bold text-xl'>
                                {NomeVetor}
                            </h1>
                        </div>
                        <button onClick={onClose}>
                          <X size={25} weight='bold'/>
                        </button>
                    </div>
                </header>
                <section className='flex flex-col justify-between h-full pb-6'>
                    <div className='w-full flex flex-col justify-around'>
                        <div className='flex flex-col gap-2'>
                            <ul className=' flex gap-4 border-b border-zinc-400 justify-center text-lg'>
                                <li className='text-zinc-500'>
                                    SVG
                                </li>
                                <li className='font-semibold'>
                                    CDR
                                </li>
                                <li className='text-zinc-500'>
                                    EPS
                                </li>
                            </ul>
                            <button className='p-2 w-full rounded-lg text-white font-semibold bg-sky-600'>
                                Download
                            </button>
                            <ul className='flex gap-2 items-center flex-wrap text-sm uppercase'>
                                {categorias.map((ct) => {
                                    return (
                                        <li className=' px-2  bg-slate-200 rounded-sm shadow-md'>
                                            {ct}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                        {/* <div className=''>
                            {relacionados.map((rc) => {
                                return (
                                    <button className='w-24 h-24 shadow-lg rounded-xl overflow-hidden'>
                                        <BoxImg src={rc}/> 
                                    </button>
                                )
                            })}
                        </div> */}
                </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}