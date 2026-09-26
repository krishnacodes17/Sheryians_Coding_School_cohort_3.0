const {body, validationResult} = require("express-validator")


const registerVAlidator = [
    body("email")
    .exists().withMessage("Email is required").bail()
    .isEmail().withMessage("Enter a valid email ")
    .trim()
    .toLowerCase(),

    body("name")
    .exists().withMessage("Name is required").bail()
    .isString().withMessage("Name must be String")
    .trim()
    .isLength({min:2,max:50}).withMessage("Name length must be 2 or more charecter"),

    body("password")
    .exists().withMessage("Password is required ").bail()
    .trim()
    .isLength({min:4,max:50}).withMessage("Password length must be 4 or more"),

    (req,res, next )=>{
        const error  = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message :"Invalid request",
                error: error.array()
            })
        }

        next()
    }

]

const loginValidator = [
    body("email")
    .exists().withMessage("Email is requires").bail()
    .isEmail().withMessage("Enter a valid email")
    .trim()
    .isLowercase(),

    body("password")
    .exists().withMessage("Password is required ").bail()
    .trim()
    .isLength({min:4,max:50}).withMessage("Password length must be 4 or more"),

    (req,res,next)=>{
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message :"Invalid request",
                error: error.array()
            })
        }
        next()
    }

]


module.exports = {
    registerVAlidator,
    loginValidator
}