// router.ts
import { Router } from "express";
import { CategoriaController } from "./controller/CategoriaController";
import { VetorController } from "./controller/VetorController";

export const router = Router();

router.get('/categorias', new CategoriaController().many);
router.get('/categoria/:ID_Categoria', new CategoriaController().showOne);
router.post('/categoria', new CategoriaController().create);
router.delete('/categoria/:ID_Categoria', new CategoriaController().delete);

router.get('/vetores', new VetorController().list);
router.get('/vetor/:id', new VetorController().showOne);
router.post('/vetor', new VetorController().newVetor);
