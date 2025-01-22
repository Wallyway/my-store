import { User, userSchema } from "./userModel.js";
import { Product, productSchema } from "./productModel.js";

export function setUpModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
}
