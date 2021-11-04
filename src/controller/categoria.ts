import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CategoriaRepository } from "../repository/CategoriaRepository";

export class CategoriaController {    
    
    async listar (req: Request, res: Response)  {
        const categoriaRepository = getCustomRepository(CategoriaRepository)
        const categorias = await categoriaRepository.find();
        res.json(categorias);
    }
}
