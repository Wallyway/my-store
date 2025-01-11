import express from 'express';

const router = express.Router();


//-------------GET

//Se usa mas JSON para comunicar con el front
router.get('/',(req,res)=>{
  const products = service.find()
  res.json(products)
})


router.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params
  res.json({
    categoryId,
    productId
  })
})

export default router;
