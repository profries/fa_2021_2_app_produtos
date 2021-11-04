import * as express from "express";
import "./database";
import rotaProduto from './rotas/produto';
import rotaCategoria from './rotas/categoria';

    const app = express();
    const PORTA = 3000;

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    //Uso da rota
    app.use('/api/produtos', rotaProduto);
    app.use('/api/categorias', rotaCategoria);

    app.listen(PORTA, () =>
        console.log ("Iniciando servidor na porta "+PORTA)
    );
