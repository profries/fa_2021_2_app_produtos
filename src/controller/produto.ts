import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Produto } from '../entity/Produto';
import { ProdutoRepository } from '../repository/ProdutoRepository';

export class ProdutoController {    
    
    async listar (req: Request, res: Response)  {
        const produtoRepository = getRepository(Produto)
        //getCustomRepository(ProdutoRepository)
        const produtos = await produtoRepository.find();
        res.json(produtos);
    }

    async inserir (req: Request, res: Response)  { 
        const produtoRepository = getCustomRepository(ProdutoRepository)
        const produto = req.body as Produto;
        await produtoRepository.save(produto);
        res.status(201).json(produto);
    }

    async buscarPorId (req: Request, res: Response)  { 
    }

    async atualizar (req: Request, res: Response)  { 
    }
    
    async deletar (req: Request, res: Response)  { 
    }
}