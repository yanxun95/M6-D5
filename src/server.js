import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import productsRoute from "./services/products/routes.js"
import reviewsRoute from "./services/reviews/routes.js"
import categoriesRoute from "./services/categories/routes.js"
import shoppingCartRoute from "./services/shoppingCart/routes.js"

const server = express()
const { PORT = 5000 } = process.env

const whitelist = [process.env.FE_DEV_URL, process.env.FE_PROD_URL]

const corsOpts = {
    origin: function (origin, next) {
        console.log("CURRENT ORIGIN: ", origin)
        if (!origin || whitelist.indexOf(origin) !== -1) {
            // if received origin is in the whitelist we are going to allow that request
            next(null, true)
        } else {
            // if it is not, we are going to reject that request
            next(new Error(`Origin ${origin} not allowed!`))
        }
    },
}

server.use(cors(corsOpts))
server.use(express.json())

server.use("/products", productsRoute)
server.use("/reviews", reviewsRoute)
server.use("/categories", categoriesRoute)
server.use("/shoppingcart", shoppingCartRoute)

server.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is listening on port ${PORT}`)
})

server.on('error', (error) => {
    console.log('Server is stoppped ', error)
})