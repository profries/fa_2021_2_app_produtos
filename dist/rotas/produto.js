"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produto_1 = require("../controller/produto");
const rota = (0, express_1.Router)();
const controller = new produto_1.ProdutoController();
// /api/produtos
rota.get("/", controller.listar);
rota.get("/:id", controller.buscarPorId);
rota.post("/", controller.inserir);
rota.put("/:id", controller.atualizar);
rota.delete("/:id", controller.deletar);
exports.default = rota;
