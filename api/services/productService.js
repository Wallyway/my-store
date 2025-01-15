//Define la logica de negocio con el fin de no usarlo en routes
import { faker } from '@faker-js/faker';
import boom from '@hapi/boom'


class ProductService {
  constructor(){
    this.products = []
    this.generate()
  }

  async generate(){
    const limit =  10   //Devuelve la cantidad que uno desea o por defecto 10
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.avatarGitHub(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data){

    const newProduct = {
      id: faker.database.mongodbObjectId(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find(){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve(this.products)
      })
    })
    // return this.products
  }

  async findOne(id){
    const product = this.products.find(item=> item.id === id)
    if(!product){
      throw boom.notFound('product not found')
    }
    if(product.isBlock){
      throw boom.conflict('product is blocked')
    }
    return product
  }

  async updated(id, changes){
    const index = this.products.findIndex(item=> item.id === id)  //Necesitamos hallar la posicion y saber si existe
    if(index===-1){
      throw boom.notFound('product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,     //"No quiero elimniar todo, quiero persistir todo"
      ...changes
    }
    return this.products[index]
  }

  async delete(id){
    const index = this.products.findIndex(item=> item.id === id)  //Necesitamos hallar la posicion y saber si existe
    if(index===-1){
      throw boom.notFound('product not found')
    }
    this.products.splice(index,1)     //Eliminar UN elemento
    return {id}
  }
}

export default ProductService;
