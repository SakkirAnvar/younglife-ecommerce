import express from 'express'
import {registerController,loginController,testController, forgetPasswordController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

//router object 
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login',loginController)

//Forget Password || POST
router.post('/forget-password',forgetPasswordController)

//test routes
router.get('/test',requireSignIn,isAdmin, testController)

//protected User route auth
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ ok:true })
})

//protected Admin route auth
router.get('/admin-auth', requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({ ok:true })
})

export default router