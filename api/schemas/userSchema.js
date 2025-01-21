import joi from 'joi';

const id = joi.string().pattern(/^[0-9a-fA-F]{24}$/)
const name = joi.string().min(3).max(15)
const telephone = joi.number().integer().min(10)
const role = joi.string().min(5)

export const createUserSchema = joi.object({
  name: name.required(),
  telephone: telephone.required(),
  role: role.required(),
})

export const getUserSchema = joi.object({
  id: id.required(),
})

export const updateUserSchema = joi.object({
  email: email,
  role: role,
})

