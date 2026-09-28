const productModel = require("../models/product.model")
const {uploadFile} = require("../services/storage.service")

const createProductController = async(req, res) => {

  const { title, description, price, sizes } = req.body

//   console.log("Title:", title)
//   console.log("Description:", description)

//   console.log("Amount:", price.amount)
//   console.log("Currency:", price.currency)

//   console.log("First Size:", sizes[0].size)
//   console.log("First Stock:", sizes[0].stock)

// //   console.log("Image:", req.file)
//   console.log("Total images:", req.files?.length)

//   console.table(
//   (req.files ?? []).map(f => ({
//     name: f.originalname,
//     type: f.mimetype,
//     sizeKB: (f.size / 1024).toFixed(1),
//     field: f.fieldname,
//     Buffer:f.buffer
//   }))
// )


try {

    // Check karein ki files aayi hain ya nahi
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "No images uploaded" });
    }

    if(req.user.role !== "seller"){
      return res.status(403).json({
        message:"user is not authorized to create product ",
        success:false
      })
    }

    // Saari files ko map karke uploadFile function me pass karein
    const uploadPromises = req.files.map((file) => {
      return uploadFile({
        buffer: file.buffer,        // File ka buffer
        fileName: file.originalname // File ka original name
      });
    });


    // Saari images upload hone ka wait karein
    const uploadResults = await Promise.all(uploadPromises);

    const imageUrls = uploadResults.map(img => img.url);


    const product = await productModel.create(
      {
        title: title,
        description:description,
        images:imageUrls,
        price:{
          amount:price.amount,
          currency:price.currency  || "INR"
        },
        sizes: sizes,

        seller:req.user.userId

      }
    )

    console.log("this is user : ", req.user.userId)


    res.status(200).json({
      success: true,
      message: "Product and Images uploaded successfully",
      product
    });

  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload product images",
      error: error.message
    });
  }

}



const getAllProduct = async(req,res)=>{

  try {

    const product = await productModel.find()

    res.status(200).json({
      message:"All product list fetch successFully",
      success:true,
      product
    })
    
  } catch (error) {
        console.error("getting product Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetching product data",
      error: error.message
    });
  }
  

}



const unlistProduct  = async (req,res)=>{

  const {id} = req.params
   
  console.log(id)
    console.log(req.user.userId)

    try {
      
      if(req.user.userId !== "seller"){
        return res.status(403).json({
          message:"Forbidden access, only a seller can unist ",
          success:false
        })
      }

      const product = await productModel.findOne(id)

      if(!product){
        return res.status(404).json({
          message:"Product not found"
        })
      }
      
      await productModel.findByIdAndUpdate(id ,{
        published:false
      })


      res.status(200).json({
        message:"Product unPublished  successfully"
      })

    } catch (error) {
       console.error("unlisting product :", error);
    res.status(500).json({
      success: false,
      message: "Failed to unlist data",
      error: error.message
    });
    }


}


const listProduct = async (req,res)=>{

  const {id} = req.params
   
  console.log(id)
    console.log(req.user.userId)

    try {
      
      if(req.user.userId !== "seller"){
        return res.status(403).json({
          message:"Forbidden access, only a seller can list ",
          success:false
        })
      }

      const product = await productModel.findOne(id)

      if(!product){
        return res.status(404).json({
          message:"Product not found"
        })
      }
      
      await productModel.findByIdAndUpdate(id ,{
        published:true
      })


      res.status(200).json({
        message:"Product unPublished  successfully"
      })

    } catch (error) {
       console.error("unlisting product :", error);
    res.status(500).json({
      success: false,
      message: "Failed to unlist data",
      error: error.message
    });
    }


}



module.exports = { 
  createProductController,
  getAllProduct,
  unlistProduct,
  listProduct
}