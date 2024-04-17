// Router tem a função de apenas receber as requisições e respostas e repassar para o controller equivalente

const { Router } = require('express');

// Importando classe UserController
const UsersController = require('../controllers/UsersController');

// Inicializando router
const usersRoutes = Router();

// Cirando uma instância da classe UserController
const usersController = new UsersController();

// Passando o processamnto da criação de usuários para o controller
usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;