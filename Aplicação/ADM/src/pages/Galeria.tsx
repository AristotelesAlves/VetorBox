import { Download } from "phosphor-react";
import placeholderImg from '../assets/placeholderIMG.jpg'
import { useEffect, useState } from "react";
import { VetoresServices } from "../service/VetoresServices";

interface IVetor {
    Downloads: number;
    ID_Usuario: number;
    ID_Vetor: string;
    Nome: string;
    URL_EPS: string;
    URL_IMG: string;
    URL_PNG: string;
    URL_SVG: string;
  }

  
export function Galerial(){

    const [vetores, setVetores] = useState<IVetor[]>([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const service = new VetoresServices();
            const result = await service.vetores();
            setVetores(result)
          } catch (error) {
            console.error('Erro ao obter vetores:', error);
          }
        };
        fetchData();
    },);


    return (
        <div className="h-full px-4 pb-4">
            <div className="columns-3xs w-full">
            {vetores.map((result) => {
                return(
                    <div  key={result.ID_Vetor} className="h-fit rounded-lg bg-white drop-shadow-lg mb-3 overflow-hidden group">
                        <a href={`/vetor/pin/${result.ID_Vetor}`}>
                            <img src={result.URL_IMG.length > 0 ? result.URL_IMG : placeholderImg} alt="" className="w-full" />
                            <div className="flex items-center justify-between bg-white px-3  group-hover:bg-sky-600 group-hover:text-white">
                                <h2 className="font-semibold">
                                    {result.Nome}
                                </h2>
                                <div className="flex items-center gap-1 py-2">
                                    <Download/>
                                    <p>
                                        {result.Downloads.toString()}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}