"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_1 = __importDefault(require("./rotas/produto"));
const app = (0, express_1.default)();
const PORTA = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Uso da rota
app.use('/api/produtos', produto_1.default);
app.listen(PORTA, () => {
    console.log("Iniciando servidor na porta " + PORTA);
});
