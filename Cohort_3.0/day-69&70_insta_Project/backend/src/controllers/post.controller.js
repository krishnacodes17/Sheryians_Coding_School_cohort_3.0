const ImageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const { Folders } = require("@imagekit/nodejs/resources/index.js");
const likeModel = require("../models/likes.model");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});


const createPostController = async (req, res) => {
  // console.log(req.body, req.file);
  const { caption } = req.body;

  console.log(caption);
  console.log("thisis image : ", req.file);

  if (!req.file) {
    return res.status(400).json({
      message: "image is required ",
      success: false,
    });
  }

  try {
    const file = await client.files.upload({
      file: req.file.buffer.toString("base64"),
      fileName: req.file.originalname,
      folder: "insta_Project",
    });

    console.log(file.url);

    const post = await postModel.create({
      caption: caption,
      imgUrl: file.url,
      user: req.userId,
    });

    res.status(201).json({
      message: "Post created successfully ",
      success: true,
      postDetails: {
        caption: caption,
        imgUrl: file.url,
        user: req.userId,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong while creating post",
      success: false,
    });
  }
};

const getPostController = async (req, res) => {
  console.log(req.userId);

  const posts = await postModel.find({
    user: req.userId,
  });

  if (!posts) {
    return res.status(400).json({
      message: "post not found ",
      success: false,
    });
  }

  res.status(200).json({
    messsage: "all post fatch successfully",
    success: true,
    posts,
  });
};

const getSingleProductDetailsController = async (req, res) => {
  const { postId } = req.params;

  try {
    const productDetails = await postModel.findById(postId);

    if (!productDetails) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }

    const isValiUser =   req.userId.toString() === productDetails.user.toString();
    // console.log("isvalid" , isValiUser)

    if(!isValiUser){
      return res.status(403).json({
        message:"forbidden content",
        success:false
      })
    }

    res.status(200).json({
      message: "product details fatch",
      success: true,
      productDetails: productDetails,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to fatch details",
      success: false,
    });
  }
};



const likePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    const isPost = await postModel.findById(postId);

    if (!isPost) {
      return res.status(404).json({
        message: "post not found",
        success: false,
      });
    }

    const alreadyLiked = await likeModel.findOne({
      post: postId,
      user: userId,
    });

    if (alreadyLiked) {
      return res.status(400).json({
        message: "Post already liked",
        success: false,
      });
    }

    const like = await likeModel.create({
      post: postId,
      user: userId,
    });

    return res.status(200).json({
      message: "post liked successfully",
      success: true,
      postdetails: like,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};


const unLikePostController = async(req,res)=>{
    // const userId = req.userId
    // const {postId} = req.params

    const {postId} = req.params
  const userId = req.userId

    const isLiked = await likeModel.findOne({
      post:postId,
      user:userId
    })

    if(!isLiked){
      return res.status(400).json({
        message: "Postdid'nt liked",
        success:false
      })
    }

    await likeModel.findOneAndDelete({_id : isLiked._id})

    return res.status(200).json({
      message:"post unliked done",
      success:true
    })

}



const getFeedController = async(req,res)=>{
  const user = req.userId
  
    const post = await Promise.all((await postModel.find().populate("user").lean())
    .map(async (post)=>{
      const isLiked = await likeModel.findOne({
        user:user.username,
        post:post._id
      })

      post.isLiked = Boolean(isLiked)
      return post
    })
  )


    res.status(200).json({
      message:"posts fetch successfully",
      success:true,
      post
    })
}



module.exports = {
  createPostController,
  getPostController,
  getSingleProductDetailsController,
  likePostController,
  unLikePostController,
  getFeedController
};
