import sequelize from "../index.js";

import s from "sequelize";
const { DataTypes } = s;

const CategoriesProduct = sequelize.define("categoriesProduct", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

export default CategoriesProduct;