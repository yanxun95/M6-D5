import sequelize from "../index.js";

import s from "sequelize";
const { DataTypes } = s;

const ShoppingCartProduct = sequelize.define("shoppingCartProduct", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default ShoppingCartProduct;