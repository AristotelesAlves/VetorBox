import { Request, Response } from "express";
import { CategoriaService } from "../service/CategoriaService";

export class CategoriaController{
    async many(req: Request, res: Response){
        const service = new CategoriaService()
        const result = await service.many()
        res.json(result)
    }
    async showOne(req: Request, res: Response){
        const {ID_Categoria} = req.params
        const service = new CategoriaService()
        const result = await service.showOne(Number(ID_Categoria))
        res.json(result)
    }
    async create(req: Request, res: Response){
        const {Nome} = req.body
        const service = new CategoriaService()
        const result = await service.create(Nome)
        res.json(result)
    }
    async delete(req: Request, res: Response){
        const {ID_Categoria} = req.params
        const service = new CategoriaService()
        const result = await service.delete(Number(ID_Categoria))
        res.json(result)
    }
}