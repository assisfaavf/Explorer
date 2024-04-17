/* 
É a parte da aplicaçãoq ue contém as regras de negócio e fará o processamento das requisições

! Um controller pode ter no máximo 5 métodos (pode ter apenas um método em um determinado controller)

*Index -GET para listar vários registros
*Show - GET para exibir um registro específico
*Create - POST para criar um registro
*Update - PUT para atualizar um registro
*Delete - DELETE para remover um registro

! Se forem necessários mais métodos na aplicação, um novo controller deve ser criado
*/

// Imprtando class AppError
const AppError = require("../utils/AppError")

// Criando class controllers
class UsersControllers {
  create(request, response) {

    const {name, email, password} = request.body;

    if(!name){
      throw new AppError("Nome é obrigatório!")
    }

    // Envia a reposta no formato de json
    response.status(201).json({name, email, password})
    
  }
}

// Exportando a class no formato de modulo
module.exports = UsersControllers;