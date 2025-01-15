import express from 'express';
import categoriesRouter from './categoriesRouter.js';
import productsRouter from './productsRouter.js';
import usersRouter from './usersRouter.js';

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);  //Para poder manejar varias versiones de un endpoint

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

export default routerApi;
