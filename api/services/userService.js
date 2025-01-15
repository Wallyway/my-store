import { faker } from '@faker-js/faker';


class UserService {
  constructor(){
    this.users=[]
    this.generate()
  }

  generate(){
    const limit =  30   //Devuelve la cantidad que uno desea o por defecto 10
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.database.mongodbObjectId(),
        name: faker.person.fullName(),
        telephone:faker.finance.accountNumber(),
        image: faker.person.sex(),
      })
    }
  }

  create(){

  }

  find(){
    return this.users
  }

  findOne(id){
    return this.users.find(user=> user.id === id)
  }

  updated(){

  }

  delete(){

  }
}

export default UserService
