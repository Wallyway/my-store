import ProductService from './../services/productService.js';
import express from 'express';

const router = express.Router();
const service = new ProductService();

//-------------GET

//Se usa mas JSON para comunicar con el front
router.get('/',(req,res)=>{
  const products = service.find()
  res.json(products)
})


//Los endpoint especificos deben ir antes de los dinamicos para evitar choques
router.get('/filter', (req,res)=>{
  res.send('Soy un filter')
})

router.get('/:id',(req,res)=>{
  const {id} = req.params
  const product = service.findOne(id)
  res.json(product)
})


//----------POST

router.post('/', (req,res)=>{
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})

//-----------PUT

router.put('/:id', (req,res)=>{
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})


//-----------PATCH

//Debe recibir un id del producto a ser modificado
router.patch('/:id', (req,res)=>{
  const {id} = req.params
  const body = req.body
  const product = service.updated(id,body)
  res.json(product)
})


// ------------DELETE

router.delete('/:id', (req,res)=>{
  const {id} = req.params
  const rta = service.delete(id)
  res.json(rta)
})

export default router;
