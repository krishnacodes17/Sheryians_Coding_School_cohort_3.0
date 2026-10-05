

const express = require("express")
const cartValidator = require("../validator/cart.valiator")
const { createCartController, getAllCart } = require("../controllers/cart.controller")
const authMiddleware = require("../middleware/auth.middleware")

const cartRoute = express.Router()

cartRoute.post("/",cartValidator, authMiddleware ,createCartController)
cartRoute.get("/",authMiddleware ,getAllCart)




module.exports = cartRoute