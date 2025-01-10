const express = require ('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

//-------------GET

//Se usa mas JSON para comunicar con el front
router.get('/',(req,res)=>{
  const products = []
  const {size} = req.query
  const limit = size || 10    //Devuelve la cantidad que uno desea o por defecto 10

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.avatarGitHub()
    })

  }
  res.json(products)
})


//Los endpoint especificos deben ir antes de los dinamicos para evitar choques
router.get('/filter', (req,res)=>{
  res.send('Soy un filter')
})

router.get('/:id',(req,res)=>{
  const {id} = req.params
  const body = req.body
  if (id=== "999"){
    res.status(404).json({
      message: 'Not found 404',
    })
  }else{
    res.status(200).json({
      id,
      name: 'Product 2',
      price: 1000
    })
  }

})


//----------POST

router.post('/', (req,res)=>{
  const {id} = req.params
  const body = req.body
  res.status(201).json({
    message: 'updated',
    data: body,
    id,
  })
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
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})


// ------------DELETE

router.delete('/:id', (req,res)=>{
  const {id} = req.params
  const body = req.body //No hace falta un body en el delete
  res.json({
    message: 'deleted',
    id,
  })
})
module.exports = router
