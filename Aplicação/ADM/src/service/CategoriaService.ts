import { Instance } from "./Instance";

export class CategoriaService{
  async vetores(){
    const result = await Instance.get('/categorias')
    return result.data
  }
}