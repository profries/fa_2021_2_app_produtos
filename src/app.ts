import express from 'express';
import rotaProduto from './rotas/produto';

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Uso da rota
app.use('/api/produtos', rotaProduto);

app.listen(PORTA, () => {
    console.log ("Iniciando servidor na porta "+PORTA);
})