const urlSchemaModel = require("../models/url.models");
const generateCode = require("../utils/generateCode");

//  create a short url
const urlController = async (req, res) => {
  let { url } = req.body;

  if (!url) {
    res.status(400).json({
      message: "Enter url ",
      success: false,
    });
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return res.status(400).json({
      message: "URL must start with http:// or https://",
      success: false,
    });
  }

  console.log(url);

  if (url.length > 2024) {
    return res.status(400).json({
      message: "URL length must be lessThan 2024",
      success: false,
    });
  }

  const code = await generateCode();

  const newUrl = await urlSchemaModel.create({
    originalUrl: url,
    shortCode: code,
  });

  res.status(200).json({
    message: "Url created  successFully",
    success: true,
    data: {
      originalUrl: url,
      shortCode: code,
    },
  });
};

//  get all url
const getAllUrlController = async (req, res) => {
  const allLink = await urlSchemaModel.find();

  res.status(200).json({
    message: "all link fetch successfully ",
    data: allLink,
  });
};

// delete url

const deleteUrlcontroller = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({
      message: "url not found ",
      success: false,
    });
  }

  const url = await urlSchemaModel.findByIdAndDelete(id);

  if (!url) {
    return res.status(404).json({
      message: "URL not found",
      success: false,
    });
  }

  res.status(200).json({
    message: "url deleted successFully ",
    success: true,
  });
};

module.exports = {
  urlController,
  getAllUrlController,
  deleteUrlcontroller,
};
