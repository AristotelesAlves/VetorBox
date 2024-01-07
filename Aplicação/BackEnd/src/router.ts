// router.ts
import { Router } from "express";
import { CategoriaController } from "./controller/CategoriaController";
import { VetorController } from "./controller/VetorController";

export const router = Router();

const categoriaController = new CategoriaController();

router.get('/categorias', categoriaController.many);
router.get('/categoria/:ID_Categoria', categoriaController.showOne);
router.post('/categoria', categoriaController.create);
router.delete('/categoria/:ID_Categoria', categoriaController.delete);

router.get('/vetores', new VetorController().list);
router.get('/vetor/:id', new VetorController().showOne);
router.post('/vetor', new VetorController().newVetor);
