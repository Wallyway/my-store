import ProductService from './../services/productService.js';
import express from 'express';

const router = express.Router();
const service = new ProductService();

//-------------GET

//Se usa mas JSON para comunicar con el front
router.get('/', async(req,res)=>{
  const products = await service.find()
  res.json(products)
})


//Los endpoint especificos deben ir antes de los dinamicos para evitar choques
router.get('/filter', (req,res)=>{
  res.send('Soy un filter')
})

router.get('/:id',async(req,res,next)=>{
  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})


//----------POST

router.post('/',async (req,res)=>{
  const body = req.body
  const newProduct = await service.create(body)
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
router.patch('/:id', async (req,res)=>{
  try {
    const {id} = req.params
    const body = req.body
    const product = await service.updated(id,body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})


// ------------DELETE

router.delete('/:id', async(req,res)=>{
  const {id} = req.params
  const rta = await service.delete(id)
  res.json(rta)
})

export default router;
