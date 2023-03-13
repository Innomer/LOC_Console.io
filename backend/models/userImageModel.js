const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserImageSchema = new Schema({
  base64:{type:String}
});

const UserImageModel = mongoose.model("userImage", UserImageSchema);

module.exports = {
  UserImageModel,
};
