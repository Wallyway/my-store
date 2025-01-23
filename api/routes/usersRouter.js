import express from 'express';
import UserService from '../services/userService.js';
import { validatorHandler } from '../middlewares/validatorHandler.js';
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/userSchema.js';

const router = express.Router()
const service = new UserService()


//------GET
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/filter', (req,res)=>{            //TODO:Implementar filtro de usuarios
  res.send('Soy un filter')
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'), async (req,res,next) =>{             //Obtener un usuario especifico
  try {
    const {id} = req.params
    console.log(id);
    const user = await service.findOne(id)
    res.json(user)
  } catch (error) {
    next(error);
  }
})


//-------------POST

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async(req,res,next)=>{                 //Crear un usuario
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
)

//-----------PUT

router.put('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req,res)=>{             //Modificar los datos del usuario
    try {
      const {id} = req.params
      const body = req.body
      const response = await service.update(id, body)
      res.json(response)
    } catch (error) {
      next(error)
    }
  }
)


//-----------PATCH

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req,res,next)=>{           //Modifica un dato en especifico de un usuario
    try {
      const {id} = req.params
      const body = req.body
      const response = await service.update(id, body)
      res.json(response)
    } catch (error) {
      next(error)
    }
  }
)

//-----------DELETE

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req,res,next)=>{           //Modifica un dato en especifico de un usuario
    try {
      const {id} = req.params
      await service.delete(id)
      res.json({
        message: 'User deleted succesfully',
      })
    } catch (error) {
      next(error)
    }
  }
)



export default router;
