//Define la logica de negocio con el fin de no usarlo en routes
import { faker } from '@faker-js/faker';

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
        algo: faker.animal.cat()
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
      }, 5000)
    })
    // return this.products
  }

  async findOne(id){
    const name = this.getTotal()
    return this.products.find(item=> item.id === id)
  }

  async updated(id, changes){
    const index = this.products.findIndex(item=> item.id === id)  //Necesitamos hallar la posicion y saber si existe
    if(index===-1){
      throw new Error('product not found')
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
      throw new Error('product not found')
    }
    this.products.splice(index,1)     //Eliminar UN elemento
    return {id}
  }
}

export default ProductService;
