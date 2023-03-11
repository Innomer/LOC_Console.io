const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserDocSchema = new Schema({
  recognitionId: { type: String},
  doc: [Object],
});

// const validateUserProfileInfo = (data) => {
//   const schema = Joi.object({
//     name: Joi.string().required().label("Full Name"),
//     dob: Joi.string().required().label("Date of Birth"),
//     loc: Joi.string().required().label("Location"),
//     phoneNo: Joi.string().required().label("Phone No"),
//     email: Joi.string().required().label("Email"),
//     image: Joi.string().required().label("Image"),
//   });
//   return schema.validate(data);
// };
const UserDocModel = mongoose.model("userdoc", UserDocSchema);

module.exports = {
  UserDocModel,
};
