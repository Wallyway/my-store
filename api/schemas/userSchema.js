import joi from 'joi';

const id = joi.string().pattern(/^[0-9a-fA-F]{24}$/)
const name = joi.string().min(3).max(15)
const telephone = joi.number().integer().min(10)
const image = joi.string().uri()

export const createProductSchema = joi.object({
  name: name.required(),
  telephone: telephone.required(),
  image: image.required()
})

export const getProductSchema = joi.object({
  id: id.required(),
})

export const updateProductSchema = joi.object({
  name: name,
  telephone: price,
  image: image
})

