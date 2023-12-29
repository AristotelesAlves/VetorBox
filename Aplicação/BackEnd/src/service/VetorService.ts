import { prismaClient } from "../prisma";

export class VetorService{
    async list(){
        const list = await prismaClient.vetor.findMany()
        return list
    }

    async showOne(id: number){
        const showOne = await prismaClient.vetor.findUnique({
            where:{id}
        })
        if(!showOne){
            return 'Imagem não encontrada'
        }
        return id
    }

    async newVetor(){
        try {
            
        } catch (error) {
            
        }
    }

}