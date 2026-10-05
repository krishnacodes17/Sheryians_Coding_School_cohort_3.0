

const {body, validationResult} = require("express-validator")

const cartValidator = [
    body("productId")
    .exists().withMessage("Product is is required").bail()
    .isMongoId()
    .isString().withMessage("MongoId is must be string").bail(),

    body("quantity")
    .exists().withMessage("Quentity is required").bail()
    .isInt({min:1}).withMessage("Quetity is must be Integer greater than 0"),

    body("size")
    .exists().withMessage("Size is required").bail()
    .isString().withMessage("Size must be a string").bail()
    .isIn(["XS","S","M","L","XL","XXL"]).withMessage("Size must be one of xs , s, m, l, xl,xxl"),


    (req,res,next)=>{
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message:"Validation error",
                success:false,
                error:error.array()
            })
        }

        next()
    }


]


module.exports = cartValidator