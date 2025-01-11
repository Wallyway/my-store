// npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
// modo desarrollo: npm run dev
// modo produccion: npm run start

//API RESTFUL: Sirve para hacer servicios web que se comunican por http mediante metodos GET, POST, PUT, DELETE

import express from 'express';
import routerApi from './routes/index.js';
import jsonMiddleware from './middlewares/jsonMiddleware.js';

const app = express();
const port = 3000;

app.use(jsonMiddleware); //Middleware para recibir info tipo json enviados por post

routerApi(app);

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`);  //Should be a warning (console.logs unwanted in production)
});
