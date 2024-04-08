// Importando o express
const express = require('express');

// Inicializanod o express
const app = express();

// Route params
// Aplicando o método Get (leitura), com o conceito de route params 
// Se for repassado /rota/:parametro, não é visto como uma continuaçãod a rota e sim uma variável parâmetro
// Esses parâmetros são para dados simples
app.get("/message/:id/:user", (request, response) => {

    // Tirando variáveis do objeto request.params
    const { id, user } = request.params

    response.send(`Mensagem ID: ${id}.
    Para o usuário ${user}`);
});

// Query params
// Aplicando o método Get (leitura), com o conceito de query params 
// É utilizado a ? para dizer que o que vem depois é um query params então utiliza-se o = para atribuir o valor para o parâmetro
// Se fo passar mais de um query param, deve se utilizar & depois que finalizar o primeiro
// Esses parâmetros não são obrigatórios na rota, irão ficar apenas como valores indefinidos mas a rota sem eles existe normalemnte
app.get("/users", (request, response) => {

    // Tirando variáveis do objeto request.query
    const { page, limit } = request.query;

    response.send(`Página: ${page}.
    Mostrar: ${limit} usuários`);
});

// Definindo a porta que a API irá funcionar
const port = 3333;
// Mensagem de inicialização do servidor
app.listen(port, () => console.log(`Server is running on port ${port}`));
