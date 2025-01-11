//Define la logica de negocio con el fin de no usarlo en routes
import { faker } from '@faker-js/faker';

class ProductService {
  constructor(){
    this.products = []
    this.generate()
  }

  generate(){
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

  create(){

  }

  find(){
    return this.products
  }

  findOne(id){
    return this.products.find(item=> item.id === id)
  }

  updated(){

  }

  delete(){

  }
}

export default ProductService;
