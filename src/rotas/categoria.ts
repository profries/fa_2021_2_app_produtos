import { Router } from "express";
import { CategoriaController } from "../controller/categoria";


const rota = Router();

const controller = new CategoriaController();

rota.get("/", controller.listar);

export default rota;