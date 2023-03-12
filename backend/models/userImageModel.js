const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserImageSchema = new Schema({
  image: { type: String, required: true },
  fileName: {
    type: String,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
});

const UserImageModel = mongoose.model("userProfile", UserImageSchema);

module.exports = {
  UserImageModel,
};
