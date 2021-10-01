
import express from "express";
import db from "../../db/models/index.js";
const router = express.Router();
const { ShoppingCart, shoppingCartProduct } = db;
import s from "sequelize";
const { Op } = s;

router
    .route("/")
    .get(async (req, res, next) => {
        try {
            const data = await ShoppingCart.findAll({
            });
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

    .post(async (req, res, next) => {
        try {
            console.log(req.body)
            const data = await ShoppingCart.create(req.body);
            res.send(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    });

router
    .route("/:id")
    .get(async (req, res, next) => {
        try {
            const data = await ShoppingCart.findByPk(req.params.id);
            res.send(data)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

    .put(async (req, res, next) => {
        try {
            const data = await ShoppingCart.update(req.body, {
                where: {
                    id: req.params.id,
                },
                returning: true,
            });
            res.send(data[1][0]);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

    .delete(async (req, res, next) => {
        try {
            const rows = await ShoppingCart.destroy({ where: { id: req.params.id } });
            if (rows > 0) {
                res.send("ok");
            } else {
                res.status(404).send("Not found");
            }
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })

    .post(async (req, res, next) => {
        try {
            const body = { productId: req.body.productId, shoppingCartId: req.params.id }
            const data = await shoppingCartProduct.create(body);
            res.send(data);
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    });


export default router;