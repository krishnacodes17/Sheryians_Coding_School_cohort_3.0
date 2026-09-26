const {body, validationResult} = require("express-validator")


const createProductValidator = [
    body("title")
    .exists().withMessage("Title is required").bail()
    .isString().withMessage("Title must be a string").bail()
    .trim()
    .isLength({min:2,max:100}).withMessage("Title must be between 2 and 100 characters"),

    body("description")
    .exists().withMessage("Description is required").bail()
    .isString().withMessage("Description must be a string").bail()
    .trim()
    .isLength({min:20,max:500}).withMessage("Description must be between 20 and 500 characters"),

    body("images")
    .optional()
    .isArray({ max: 5 }).withMessage("A product can have at most 5 images"),

    body("images.*")
    .optional()
    .isString().withMessage("Each image must be a string"),

    body("price.amount")
    .exists().withMessage("Price amount is required").bail()
    .isFloat({ min: 0 }).withMessage("Price amount must be a number greater than or equal to 0"),

    body("price.currency")
    .optional()
    .isString().withMessage("Currency must be a string").bail()
    .isIn(["INR","USD"]).withMessage("Currency must be either INR or USD"),

    body("sizes")
    .optional()
    .isArray().withMessage("Sizes must be an array of objects"),

    body("sizes.*.size")
    .exists().withMessage("Size is required").bail()
    .isIn(["XS","S","M","L","XL","XXL"]).withMessage("Size must be one of XS, S, M, L, XL, XXL"),

    body("sizes.*.stock")
    .optional()
    .isInt({min:0}).withMessage("Stock must be a non-negative integer"),

    // body("seller")
    // .exists().withMessage("Seller is required").bail()
    // .isMongoId().withMessage("Seller must be a valid ObjectId"),

    (req,res,next)=>{
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                error:error.array()
            })
        }

        next()
    }


] 

module.exports= createProductValidator