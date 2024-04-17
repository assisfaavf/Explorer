//Importando o express-async-errors
require ("express-async-errors")

// Importando o express
const express = require('express');

// Importando a class AppError
const AppError = require("./utils/AppError")

// Importando rotas no index.js
const routes = require("./routes")

// Inicializanod o express
const app = express();

// Informando que vai receber informações em json
app.use(express.json());

// Informa a api pra usar as rotas do index.js que foi importada
app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({status: "error", message: error.message});
    }

    console.error(error);

    return response.status(500).json({status: "error", message: "Internal server error"});
});

/*Método GET
    // Route params
        // Aplicando o método Get (leitura), com o conceito de route params 
        // Se for repassado /rota/:parametro, não é visto como uma continuaçãod a rota e sim uma variável parâmetro
        // Esses parâmetros são para dados simples
        // app.get("/message/:id/:user", (request, response) => {

        //     // Tirando variáveis do objeto request.params
        //     const { id, user } = request.params

        //     response.send(`Mensagem ID: ${id}.
        //     Para o usuário ${user}`);
        // });

    // Query params
        // Aplicando o método Get (leitura), com o conceito de query params 
        // É utilizado a ? para dizer que o que vem depois é um query params então utiliza-se o = para atribuir o valor para o parâmetro
        // Se fo passar mais de um query param, deve se utilizar & depois que finalizar o primeiro
        // Esses parâmetros não são obrigatórios na rota, irão ficar apenas como valores indefinidos mas a rota sem eles existe normalemnte
        // app.get("/users", (request, response) => {

        //     // Tirando variáveis do objeto request.query
        //     const { page, limit } = request.query;

        //     response.send(`Página: ${page}.
        //     Mostrar: ${limit} usuários`);
        // });
*/
/* Método post
    // Usa par areceber uma respota de acorodo com as informções requisitadas
// app.post("/users", (request, response) => {

//     const {name, email, password} = request.body

//     // Envia a resposta no formato parecido com um html limpo 
//     // response.send(`Usuário: ${name} - email:${email} - senha:${password}`);

//     // Envia a reposta no formato de json
//     response.json({name, email, password})
// });


*/

// Definindo a porta que a API irá funcionar
const port = 3333;
// Mensagem de inicialização do servidor
app.listen(port, () => console.log(`Server is running on port ${port}`));
