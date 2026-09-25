const { default: mongoose } = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    originalUrl: { type: String, required: true, trim: true, maxlength: 2048 },
    shortCode: { type: String, required: true, unique: true },
    clicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);


const urlSchemaModel = mongoose.model("UrlSchema",urlSchema)

module.exports = urlSchemaModel