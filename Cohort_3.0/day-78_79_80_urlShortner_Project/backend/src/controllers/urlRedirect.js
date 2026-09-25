const urlSchemaModel = require("../models/url.models");

const urlRedirectController = async (req, res) => {
  const { code } = req.params;

  const urlFullLink = await urlSchemaModel.findOne({ shortCode: code });

  if (!urlFullLink) {
    return res.status(404).json({
      message: "url not found",
      success: false,
    });
  }

  await urlSchemaModel.findOneAndUpdate(
    {
      shortCode: code,
    },
    { $inc: { clicks: 1 } },
  );

  return res.redirect(302, urlFullLink.originalUrl);
};

module.exports = urlRedirectController;