const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const UserProfileSchema = new Schema({
  name: { type: String, required: true },
  //   mname: { type: String, required: true },
  //   lname: { type: String, required: true },
  dob: { type: String, required: true },
  loc: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
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

const validateUserProfileInfo = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Full Name"),
    // mname: Joi.string().required().label("Middle Name"),
    // lname: Joi.string().required().label("Last Name"),
    dob: Joi.string().required().label("Date of Birth"),
    loc: Joi.string().required().label("Location"),
    phoneNo: Joi.string().required().label("Phone No"),
    email: Joi.string().required().label("Email"),
    fileName: Joi.string().required().label("fileName"),
    filePath: Joi.string().required().label("filePath"),
    fileType: Joi.string().required().label("fileType"),
  });
  return schema.validate(data);
};
const UserProfModel = mongoose.model("userProfile", UserProfileSchema);

module.exports = {
  UserProfModel,
  validateUserProfileInfo,
};
