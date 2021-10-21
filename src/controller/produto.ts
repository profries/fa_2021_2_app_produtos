import {Request, Response} from 'express';
import {Produto} from '../model/produto';

export class ProdutoController {    
    async listar (req: Request, res: Response)  {
        const listaProdutos: Produto[] = [];
        const produto: Produto = { 
            id: 1,
            nome: "produto1", 
            preco: 30    
        };
        listaProdutos.push(produto);
        res.json(listaProdutos);
    }

    async inserir (req: Request, res: Response)  { 
        const produto = req.body;
        res.send("Inserindo produto: "+produto.nome);    
    }

    async buscarPorId (req: Request, res: Response)  { 
        res.send("Buscando produto com id "+ req.params.id);
    }

    async atualizar (req: Request, res: Response)  { 
        const id = req.params.id;
        const produto = req.body;
        res.send("Alterando produto com id "+id);    
    }
    
    async deletar (req: Request, res: Response)  { 
        const id = req.params.id;
        res.send("Deletando produto com id: "+id);    
    }
}