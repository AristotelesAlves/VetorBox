import { Request, Response } from "express";
import { VetorService } from "../service/VetorService";

export class VetorController{
    async list(req: Request, res: Response){
        const service = new VetorService();
        const result = await service.list();
        res.json(result);
    }

    async showOne(req: Request, res: Response){
        const {id} = req.params;
        const service = new VetorService();
        const result = await service.showOne(id);
        res.json(result);
    }

    async newVetor(req: Request, res: Response){
        const {Category,URL_EPS,URL_IMG,URL_PNG,URL_SVG,Downloads,Nome,ID_Usuario,shortURLEPS, shortURLPNG, shortURLSVG} = req.body;
        const service = new VetorService();
        const result = await service.newVetor({
            Category,Downloads,Nome,URL_EPS,URL_IMG,URL_PNG,URL_SVG,shortURLEPS, shortURLPNG, shortURLSVG
        }, ID_Usuario )
        
        res.json(result)
    }

    async update(req: Request, res: Response) {
        try {
            const {
                Category,
                URL_EPS,
                URL_IMG,
                URL_PNG,
                URL_SVG,
                Nome,
                shortURLEPS,
                shortURLPNG,
                shortURLSVG,
                ID_Vetor,
            } = req.body;

            const service = new VetorService();
            const result = await service.update({
                Category,
                URL_EPS,
                URL_IMG,
                URL_PNG,
                URL_SVG,
                Nome,
                shortURLEPS,
                shortURLPNG,
                shortURLSVG,
                ID_Vetor,
            });

            if (result) {
                res.status(200).json({ message: 'Vetor atualizado com sucesso!' });
            } else {
                res.status(404).json({ error: 'Vetor não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao atualizar vetor:', error.message);
            res.status(500).json({ error: 'Erro interno do servidor ao atualizar vetor.' });
        }
    }
}