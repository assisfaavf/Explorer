// Importando o express
const express = require('express');

// Inicializanod o express
const app = express();

// Aplicanod o método Get(leitura)
app.get("/", (request, response) => {
    response.send("Hello, World!")
})

// Definindo a porta que a API irá funcionar
const port = 3333;
// Mensagem de inicialização do servidor
app.listen(port, () => console.log(`Server is running on port ${port}`));
