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
        const {Category,URL_EPS,URL_IMG,URL_PNG,URL_SVG,Downloads,Nome,ID_Usuario} = req.body;
        const service = new VetorService();
        const result = await service.newVetor({
            Category,Downloads,Nome,URL_EPS,URL_IMG,URL_PNG,URL_SVG
        }, ID_Usuario )
        
        res.json(result)
    }

}