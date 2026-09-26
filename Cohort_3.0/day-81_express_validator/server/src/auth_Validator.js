const {body,validationResult} = require("express-validator")

 const authValidate = [
    body("email")
    .exists().withMessage("email is required")
    .isEmail().withMessage("Invalid email "),

    body("age")
    .exists().withMessage(" age is requered ")
    .isNumeric().withMessage("age is required ")

    ,

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

module.exports = authValidate