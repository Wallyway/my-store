// npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
// modo desarrollo: npm run dev
// modo produccion: npm run start

//API RESTFUL: Sirve para hacer servicios web que se comunican por http mediante metodos GET, POST, PUT, DELETE

import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';
import jsonMiddleware from './middlewares/jsonMiddleware.js';
import { logErrors, errorHandler, boomErrorHandler, handleSQLError} from './middlewares/errorHandler.js';


const app = express();
const port = process.env.PORT || 3000; //Puerto por defecto o el que se le asigne

const whitelist = ['http://localhost:8080', 'https://myapp.co']; //Lista de dominios permitidos
const options = {               //Esto es para configurar el cors
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    }else{
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(options));                //Middleware para habilitar CORS, usualemente se coloca antes de las rutas
app.use(jsonMiddleware);          //Middleware para recibir info tipo json enviados por post

routerApi(app);

app.use(logErrors)     //Importante poner de forma secuencial
app.use(handleSQLError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/api',(req,res)=>{
  res.send('Server Express');
})

app.listen(port,()=>{
  console.log(`Listening at http://localhost:${port}`);  //Should be a warning (console.logs unwanted in production)
});
