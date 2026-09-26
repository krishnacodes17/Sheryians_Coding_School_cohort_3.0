const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});



async function uploadFile({buffer, fileName}) {

  if (!buffer) {
    throw new Error("Buffer is required for file upload");
  }

  const response = await client.files.upload({
    file: await toFile(buffer),
    fileName: fileName,
  });

  return response
}


module.exports = {
    uploadFile
}