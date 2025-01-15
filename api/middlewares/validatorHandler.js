import boom from '@hapi/boom'

//Enviar el schema y api de joi saber si los datos cumplen con las reglas en schemas.
//middleware de tipo: Normal
export function validatorHandler(schema, property){ // Estos datos significan que se espera un schema y una propiedad
  //Construir middlewares de forma dinamica. retornara un middleware

  return (req,res,next) =>{ //Propiedad closure de JS
    const data = req[property] //Esperamos que la propiedad sea body, params, query
    const {error} = schema.validate(data, {abortEarly: false}) //Se espera que el error sea false
    if(error){
      next(boom.badRequest(error))            //Se envia a los middlewares tipo Error
    }else{
      next() //Si no hay error, se envia al siguiente middleware
    }
  }
}
