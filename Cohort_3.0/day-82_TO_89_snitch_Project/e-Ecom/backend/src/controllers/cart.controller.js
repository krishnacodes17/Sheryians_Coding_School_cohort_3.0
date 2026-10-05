const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");

const createCartController = async (req, res) => {
  console.log("  createCartController");

  try {
    const { productId, quantity, size } = req.body;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
      });
    }

    const selectedSize = product.sizes.find((s) => s.size === size);

    if (!selectedSize) {
      return (400).json({
        message: "Invalid size",
        success: false,
      });
    }

    if (selectedSize.stock < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
        success: false,
      });
    }

    const cart =
      (await cartModel.findOne({ user: req.user.userId })) ??
      (await cartModel.create({ user: req.user.userId }));

    const productInCart = cart.product.find(
      (p) => p.productId.toString() === productId,
    );

    if (productInCart) {
      if (productInCart.quantity + quantity > selectedSize.stock) {
        return res.status(400).json({
          message: "Insufficient Product",
          success: false,
        });
      }

      await cartModel.updateOne(
        {
          user: req.user.userId,
          "product.productId": productId,
          "product.size": size,
        },
        {
          $inc: {
            "product.$.quantity": quantity,
          },
        },
      );

      return res.status(200).json({
        message: "Product quentity updated in cart",
        success: true,
      });
    }

    await cartModel.updateOne(
      {
        user: req.user.userId,
      },
      {
        $push: {
          product: {
            productId: productId,
            quantity: quantity,
            size: size,
          },
        },
      },
    );

    return res.status(200).json({
      message: "Product added to cart successFully ",
      success: true,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "failed to create  cart ",
      error: error.message,
    });
  }
};

const getAllCart = async (req, res) => {
  console.log("getAllCart");

  try {
    const cart =
      (await cartModel.findOne({ user: req.user.userId })) ??
      (await cartModel.create({ user: req.user.userId }));

    return res.status(200).json({
      message: "Cart retrive successFully",
      data: {
        cart: cart,
      },
    });
  } catch (error) {
    console.log("error :", error);   
    res.status(500).json({
      success: false,
      message: "failed to get  cart ",
      error: error.message, 
    });
  } 
};

module.exports = {
  createCartController,
  getAllCart,
};
