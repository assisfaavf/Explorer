// Importando o router do express
const {Router} = require("express")

// Importando as rotas do usuário
const userRouter  = require("./users.routes.js");

const routes = Router();

routes.use("/users" , userRouter)

module.exports = routes;