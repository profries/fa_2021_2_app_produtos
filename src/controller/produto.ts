import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Produto } from '../entity/Produto';
import { ProdutoRepository } from '../repository/ProdutoRepository';

export class ProdutoController {    
    
    async listar (req: Request, res: Response)  {
        const produtoRepository = getCustomRepository(ProdutoRepository)
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
        const produtoRepository = getCustomRepository(ProdutoRepository)        
        const id = req.params.id;
        const produto = await produtoRepository.findOne(id);
        if(produto) { 
            res.json(produto);
        }
        else {
            res.status(404).json({
                error: "Produto nao encontrado"
            });
        }
    }

    async atualizar (req: Request, res: Response)  { 
        const produtoRepository = getCustomRepository(ProdutoRepository)        
        const id = req.params.id;
        const dadosProduto = req.body as Produto;

        const produto = await produtoRepository.findOne(id);
        if(produto) { 
            produto.nome = dadosProduto.nome;
            produto.preco = dadosProduto.preco;
            await produtoRepository.save(produto);
            res.json(produto);
        }
        else {
            res.status(404).json({
                error: "Produto nao encontrado"
            });
        }
    }
    
    async deletar (req: Request, res: Response)  { 
        const produtoRepository = getCustomRepository(ProdutoRepository)        
        const id = req.params.id;

        const produto = await produtoRepository.findOne(id);
        if(produto) { 
            //await produtoRepository.delete(id);
            await produtoRepository.remove(produto);
            res.json(produto);
        }
        else {
            res.status(404).json({
                error: "Produto nao encontrado"
            });
        }
    }
}