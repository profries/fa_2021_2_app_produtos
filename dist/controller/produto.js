"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
class ProdutoController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaProdutos = [];
            const produto = {
                id: 1,
                nome: "produto1",
                preco: 30
            };
            listaProdutos.push(produto);
            res.json(listaProdutos);
        });
    }
    inserir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = req.body;
            res.send("Inserindo produto: " + produto.nome);
        });
    }
    buscarPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send("Buscando produto com id " + req.params.id);
        });
    }
    atualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const produto = req.body;
            res.send("Alterando produto com id " + id);
        });
    }
    deletar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            res.send("Deletando produto com id: " + id);
        });
    }
}
exports.ProdutoController = ProdutoController;
