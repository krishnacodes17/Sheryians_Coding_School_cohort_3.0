import express from "express"
import passport from "../config/passport.js"

const authRouter = express.Router()

authRouter.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
    session: false,
  }) 
);


authRouter.get("/auth/google/callback",
    passport.authenticate('google', {
    session: false,
    failureRedirect:"/"
  }) 
    ,(req,res)=>{

        const user = req.user
        const email = user.emails[0].value

        console.log("user data : " , email);
    
    res.send( req.user)
})



export default authRouter