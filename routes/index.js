const express = require ('express')
const categoriesRouter = require('./categoriesRouter')
const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)  //Para poder manejar varias versiones de un endpoint

  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
}

module.exports = routerApi
