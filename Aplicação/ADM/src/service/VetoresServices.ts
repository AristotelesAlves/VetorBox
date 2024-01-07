import { Instance } from "./Instance";

interface IVetorData {
  Category?: string[];
  URL_EPS: string;
  URL_IMG: string;
  URL_PNG: string;
  URL_SVG: string;
  Downloads: number;
  Nome: string;
  ID_Usuario: number;
}


export class VetoresServices{
  async vetores(){
    const result = await Instance.get('/vetores')
    return result.data
  }

  async showOne(id: string){
    const result = await Instance.get(`/vetor/${id}`);
    return result.data
  }

  async Create(data: IVetorData | IVetorData[]) {
    try {
      const result = await Instance.post('/vetor',data);
      return result.data; 
    } catch (error) {
      console.error('Erro ao criar vetor:', error);
      throw error;
    }
  }
}