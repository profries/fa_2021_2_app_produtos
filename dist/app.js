"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORTA = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// /api/{recurso}
// GET /api/produtos -> listar todos os produtos existentes
app.get("/api/produtos", (req, res) => {
    const listaProdutos = [];
    const produto = {
        id: 1,
        nome: "prod1",
        preco: 30
    };
    listaProdutos.push(produto);
    res.json(listaProdutos);
});
// GET /api/produtos/:id -> retorna o produto cujo id = :id
app.get("/api/produtos/:id", (req, res) => {
    res.send("Buscando produto com id " + req.params.id);
});
// POST /api/produtos -> Adicionar um novo produto
app.post("/api/produtos", (req, res) => {
    const produto = req.body;
    res.send("Inserindo novo produto: " + produto.nome);
});
// PUT /api/produtos/:id -> atualizar o produto cujo id = :id
app.put("/api/produtos/:id", (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    res.send("Alterando produto com id " + id);
});
// DELETE /api/produtos/:id -> deletar o projeto cujo id = :id
app.delete("/api/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.send("Deletando produto com id: " + id);
});
app.listen(PORTA, () => {
    console.log("Iniciando servidor na porta " + PORTA);
});
