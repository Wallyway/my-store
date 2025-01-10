const { de } = require('@faker-js/faker')
const express = require ('express')

const router = express.Router()

router.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params
  res.json({
    categoryId,
    productId
  })
})

export default router()
