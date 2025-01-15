import express from 'express';
import UserService from '../services/userService.js';

const router = express.Router()
const service = new UserService()


//------GET
router.get('/',(req,res)=>{                   //Obtener todos los usuarios
  const users = service.find()
  res.json(users)
})

router.get('/filter', (req,res)=>{            //TODO:Implementar filtro de usuarios
  res.send('Soy un filter')
})

router.get('/:id', (req,res) =>{              //Obtener un usuario especifico
  const {id} = req.params
  const user = service.findOne(id)
  res.json(user)
})


//-------------POST

router.post('/', (req,res)=>{                 //Crear un usuario
  const {id} = req.params
  const body = req.body
  res.status(201).json({
    message: 'User Created',
    data: body,
    id,
  })
})

//-----------PUT

router.put('/:id', (req,res)=>{             //Modificar los datos del usuario
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})


//-----------PATCH

router.patch('/:id', (req,res)=>{           //Modifica un dato en especifico de un usuario
  const {id} = req.params
  const body = req.body
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})

//-----------DELETE

router.delete('/:id', (req,res)=>{
  const {id} = req.params
  res.json({
    message: 'User Deleted',
    id,
  })
})



export default router;
