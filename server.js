import express from "express";
import { get } from "node:http";

const app = express();
const porta = 8000;

//Rotas
app.get("/", (request, response) => {
    response.send("API funcionando");

});

app.get("/infonet3", (request, response) => {
    const alunos = [
        {
            nome: "Maria Eduarda",
        },
         {
            nome: "Isaac",
        },
         {
            nome: "Lorena",
        },
         {
            nome: "Eduardo",
        },
         {
            nome: "Guilherme",
        },
         {
            nome: "Dantas",
        },
         {
            nome: "Feige",
        },
         {
            nome: "Thales",
        },
         {
            nome: "Maria Luiza",
        },
         {
            nome: "Joao Pedro",
        }
    ];
    response.json(alunos);

});

//Listener
app.listen(porta, (request, response)=> {

    console.log(`servidor rodando: http://127.0.0.1:${porta}`)

});