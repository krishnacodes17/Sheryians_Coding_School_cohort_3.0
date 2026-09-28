const {body, validationResult, param} = require("express-validator")


const unlistProductValidator = [
    param("id")
    .exists().withMessage("product id is required ").bail()
    .isMongoId().withMessage("product is must be mongoid"),


    (req,res,next)=>{
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({
                message:"invalid data",
                success:false,
                error:error
            })
        }

        next()
    }
]





module.exports = unlistProductValidator
