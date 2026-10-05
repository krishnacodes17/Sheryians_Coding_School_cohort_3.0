const bcrypt = require("bcryptjs")

const HasedPassWordGenerate = (password)=>{
    const hasedpassword  = bcrypt.hash(password , 12)
    return hasedpassword
}

const isPasswordCorrect = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    return isMatch
}




module.exports = {
    HasedPassWordGenerate,
    isPasswordCorrect
}