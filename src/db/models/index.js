import Product from "./products.js";
import Review from "./reviews.js";
import Categories from "./categories.js";
import ShoppingCart from "./shoppingCart.js"
import categoriesProduct from "./categoriesProduct.js"
import shoppingCartProduct from "./shoppingCartProduct.js"

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Categories, { through: "categoriesProduct" });
Categories.belongsToMany(Product, { through: "categoriesProduct" });

Product.belongsToMany(ShoppingCart, { through: "shoppingCartProduct" });
ShoppingCart.belongsToMany(Product, { through: "shoppingCartProduct" });

export default { Product, Review, Categories, ShoppingCart, categoriesProduct, shoppingCartProduct };