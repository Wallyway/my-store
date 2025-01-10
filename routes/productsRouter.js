const express = require ('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()


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
  res.json({
    id,
    name: 'Product 1',
    price: 100
  })
})


//-----------POST

router.post('/', (req,res)=>{
  const body = req.body //No hace falta destrutalizar '{}' porque queremos todo
  res.json({
    message: 'created',
    data: body,
  })
})
module.exports = router
