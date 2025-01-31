import joi from 'joi';

const id = joi.number().integer();
const email = joi.string().email();
const password = joi.string().min(8);
const role = joi.string().min(5)


export const createUserSchema = joi.object({
  email: email.required(),
  password: password.required(),
  role: role.required(),
})

export const getUserSchema = joi.object({
  id: id.required(),
})

export const updateUserSchema = joi.object({
  email: email,
  role: role,
})

