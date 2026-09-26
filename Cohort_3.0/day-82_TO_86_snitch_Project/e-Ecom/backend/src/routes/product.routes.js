

const express = require("express")
const multer = require("multer")
const { createProductController, getAllProduct } = require("../controllers/product.controller")
const createProductValidator = require("../validator/product.validator")
const authMiddleware = require("../middleware/auth.middleware")
const productRoutes = express.Router()

const upload  = multer({storage:multer.memoryStorage(),
    limits:{
        fileSize:1 *1024 *1024,
        files:5 
        
    }
})

/**
 * @method post
 * @route /api/v1/products
 * @description create the product and save its data into DB image will be store in imageKit
 */
productRoutes.post("/create",upload.array("images",5),createProductValidator,authMiddleware,createProductController)

productRoutes.get("/getallproduct",authMiddleware,getAllProduct)







module.exports = productRoutes