import {Router} from 'express';
import { ProdutoController } from '../controller/produto';

const rota = Router();
const controller = new ProdutoController();

// /api/produtos
rota.get("/", controller.listar);
rota.get("/:id", controller.buscarPorId);
rota.post("/", controller.inserir);
rota.put("/:id", controller.atualizar);
rota.delete("/:id", controller.deletar);

export default rota;