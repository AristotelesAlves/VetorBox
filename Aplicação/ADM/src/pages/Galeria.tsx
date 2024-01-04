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
            const result = await service.vetores(); // Aguarde a resolução da Promise
            setVetores(result)
          } catch (error) {
            console.error('Erro ao obter vetores:', error);
          }
        };
      
        fetchData();
    },);


    return (
        <div className="px-2 w-full h-full flex gap-3 flex-wrap overflow-y-scroll justify-center">
            {vetores.map((result) => {
                return(
                    <div key={Math.random()} className="w-80 h-fit rounded-lg p-4 bg-white drop-shadow-lg">
                        <img src={placeholderImg} alt="" />
                        <div className="flex items-center justify-between bg-white">
                            <h2>
                                {result.Nome}
                            </h2>
                            <div className="flex items-center gap-1 py-2">
                                <Download/>
                                <p>
                                    {result.Downloads.toString()}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}

            


        </div>
    )
}