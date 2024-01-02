// router.ts
import { Router } from "express";
import { VetorController } from "./controller/VetorController";

export const router = Router();

router.get('/vetores', new VetorController().list)
router.get('/vetor/:id', new VetorController().showOne)
router.post('/vetor', new VetorController().newVetor)
