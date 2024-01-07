import { prismaClient } from "../prisma";

export class CategoriaService{
    async create(Nome:string){
        try {
            const date = await prismaClient.categorias.create({
                data:{
                    Nome,
                }
            })
            if(date){
                console.info('Create successfully')
                return true;
            }
            console.info('Create failed')
            return false;

        } catch (error) {
            console.error('Error new category:', error)
            return false;
        }
    }
    async delete(ID_Categoria: number){
        try {
            const date = await prismaClient.categorias.delete({
                where:{
                    ID_Categoria
                }
            })

            if(date){
                console.info('Delete successfully')
                return true;
            }
            console.info('Delete failed')
            return false;

        } catch (error) {
            console.error('Error delete category:', error)
        }
    }
    async showOne(ID_Categoria: number){
        try {
            const date = await prismaClient.categorias.findUnique({
                where:{
                    ID_Categoria
                }
            })

            if(date){
                return date;
            }
            return 'Categoria não encontrada';

        } catch (error) {
            console.error('Error showOne category:', error)
            return false;
        }
    }
    async many(){
        try {
            const date = await prismaClient.categorias.findMany({})
            return date
        } catch (error) {
            console.error('Error list category:', error)
            return
        }
    }
}