import { prismaClient } from "../prisma";

interface IvetorProps{
    ID_Vetor?: string;
    Category: Array<string>;
    Nome: string;
    Downloads?: number;
    URL_EPS: string;
    URL_IMG: string;
    URL_PNG: string;
    URL_SVG: string;
    shortURLEPS: string;
    shortURLPNG: string;
    shortURLSVG: string;

}

export class VetorService{
    async list(){
        try {
            const list = await prismaClient.vetores.findMany()
            return list
        } catch (error) {
            return 'Erro ao carregar lista de vetores: ' + error.message
        }
    }

    async showOne(id: string){
        try {
            const showOne = await prismaClient.vetores.findUnique({
                where:{
                    ID_Vetor: id
                },
                include: {
                    categorias: true
                }
            })
            if(!showOne){
                return 'Vetor não encontrado'
            }
            return showOne
        } catch (error) {
            return 'Erro ao buscar o vetor: ' + error.message;
        }
    }

    async newVetor({ Category, URL_EPS, URL_IMG, URL_PNG, URL_SVG, Downloads, Nome, shortURLEPS, shortURLPNG, shortURLSVG }: IvetorProps, ID_Usuario: number) {
        try {
            const existingCategories = await prismaClient.categorias.findMany();
            const connecting = [];
            const newCategory = [];
    
            for (const categoryName of Category) {
                const existingCategory = existingCategories.find((c) => c.Nome === categoryName);
    
                if (existingCategory) {
                    connecting.push({ ID_Categoria: existingCategory.ID_Categoria });
                } else {
                    newCategory.push({ Nome: categoryName });
                }
            }
    
            const NewVetor = await prismaClient.vetores.create({
                data: {
                    Downloads,
                    URL_EPS,
                    URL_IMG,
                    URL_PNG,
                    URL_SVG,
                    Update_at: new Date(),
                    create_at: new Date(),
                    shortURLEPS,
                    shortURLPNG,
                    shortURLSVG,
                    Nome,
                    
                    categorias: {
                        connect: connecting,
                        create: newCategory,
                    },
                    user: {
                        connect: {
                            ID: ID_Usuario
                        }
                    }
                },
                include: {
                    categorias: true,
                }
            });
    
            return NewVetor;
        } catch (error) {
            return 'Erro ao criar novo vetor: ' + error.message;
        }
    }

    async update({ Category, URL_EPS, URL_IMG, URL_PNG, URL_SVG, Nome, shortURLEPS, shortURLPNG, shortURLSVG, ID_Vetor }: IvetorProps) {
        try {
            const vetor = await prismaClient.vetores.findUnique({
                where: { ID_Vetor },
                include: {
                    categorias: true,
                },
            });
    
            if (vetor) {
                const existingCategories = await prismaClient.categorias.findMany();
                const connecting = [];
                const newCategory = [];
    
                for (const categoryName of Category) {
                    const existingCategory = existingCategories.find((c) => c.Nome === categoryName);
    
                    if (existingCategory) {
                        connecting.push({ ID_Categoria: existingCategory.ID_Categoria });
                    } else {
                        newCategory.push({ Nome: categoryName });
                    }
                }
    
                const editing = await prismaClient.vetores.update({
                    where: { ID_Vetor },
                    data: {
                        URL_EPS,
                        URL_IMG,
                        URL_PNG,
                        URL_SVG,
                        Update_at: new Date(),
                        shortURLEPS,
                        shortURLPNG,
                        shortURLSVG,
                        Nome,
                        categorias: {
                            disconnect: vetor.categorias.map((categoria) => ({ ID_Categoria: categoria.ID_Categoria })),
                            connect: connecting,
                            create: newCategory,
                        },
                    },
                    include: {
                        categorias: true,
                    },
                });
    
                return editing;
            }
    
            console.error('Erro ao encontrar o vetor');
            return false;
        } catch (error) {
            console.error('Erro ao editar o vetor: ' + error.message);
            return false;
        }
    }
}