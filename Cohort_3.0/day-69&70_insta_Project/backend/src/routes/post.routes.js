const express = require("express")
const multer  = require("multer")

const { createPostController, getPostController, getSingleProductDetailsController, likePostController, getFeedController, unLikePostController } = require("../controllers/post.controller")
const authMiddleware = require("../middleware/auth.middleware")



const upload = multer({ storage: multer.memoryStorage() })

const postRouter = express.Router()

postRouter.post("/",upload.single("image"),authMiddleware,createPostController)

postRouter.get("/",authMiddleware,getPostController)

postRouter.get("/details/:postId",authMiddleware,getSingleProductDetailsController)

postRouter.get("/like/:postId",authMiddleware,likePostController)
postRouter.get("/unlike/:postId",authMiddleware,unLikePostController)

postRouter.get("/feed",authMiddleware,getFeedController)



module.exports = postRouter