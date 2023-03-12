const {
  UserProfModel,
  validateUserProfileInfo,
  //   validateUserProfileInfo,
} = require("../models/userProfileModel");

const createUserProf = async (request, response) => {
  console.log("userProfileController => createUserProf");
  console.log(request.body);

  // console.log(request.file);

  //   const hackiName = request.params.id;

  // const image = request.file ? request.file.filename : null;
  // const filename = request.file.originalname;
  // const filepath = request.file.path;
  // const filetype = request.file.mimetype;

//   fileName: req.file.originalname,
//       filePath: req.file.path,
//       fileType: req.file.mimetype,
  // console.log("Image declare krne ke baad", image);

  const { name, dob, loc, phoneNo, email } = request.body;

//   const userProfile = {
//     name,
//     dob,
//     loc,
//     phoneNo,
//     email,
//   };
//   const { error } = validateUserProfileInfo(userProfile);
//   if (error) {
//     console.log(error.details[0].message);
//     return response.status(400).send({ message: error.details[0].message });
//   }

  const newUserProfile = new UserProfModel({
    name,
    dob,
    loc,
    phoneNo,
    email,
    // filename,filepath,filetype,
  });
  try {
    console.log("try");
    await newUserProfile.save();
    console.log("UserProfile created successfully");
    response.status(201).json(newUserProfile);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getUserProfiles = async (request, response) => {
  try {
    const userProfiles = await UserProfModel.find({});
    response.status(200).json(userProfiles);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getUserProfile = async (request, response) => {
  try {
    console.log(request.params._id);
    // const teamDetail = await TeamDetailModel.findOne({
    //   email: request.params.email,
    // });
    const userProfile = await UserProfModel.findById(request.params.id);
    response.status(200).json(userProfile);
    // console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editUserProfile = async (request, response) => {
  const userProfile = request.body;
  console.log(userProfile);
  const editUserProfile = new UserProfModel(userProfile);
  try {
    await User.updateOne({ email: request.body.email }, editUserProfile);
    response.status(201).json(editUserProfile);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const deleteUserProfile = async (request, response) => {
  try {
    await UserProfModel.deleteOne({ _id: request.params.id });
    response.status(201).json(message = "User deleted successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  createUserProf,
  getUserProfiles,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
};
