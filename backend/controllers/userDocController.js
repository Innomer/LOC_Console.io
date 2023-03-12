const {
  UserDocModel,
} = require("../models/userDocModel");

const createUserDoc = async (request, response) => {
  console.log("userDocController => createUserProf");
  console.log(request.body);
  console.log(request.files);
  //   const hackiName = request.params.id;
  let docArray = [];
     req.files.forEach((element) => {
       const file = {
         fileName: element.originalname,
         filePath: element.path,
         fileType: element.mimetype,
       };
       docArray.push(file);
     });
  // const image = request.file ? request.file.filename : null;
  // console.log("Image declare krne ke baad", image);

   const multipleDocs = new MultipleFile({
     albumTitle: req.body.recognitionID,
     docs: docArray,
   });


  // const { name, dob, loc, phoneNo, email } = request.body;

  // const userProfile = {
  //   name,
  //   dob,
  //   loc,
  //   phoneNo,
  //   email,
  // };
  // const { error } = validateUserProfileInfo(userProfile);
  // if (error) {
  //   console.log(error.details[0].message);
  //   return response.status(400).send({ message: error.details[0].message });
  // }

  // const newUserProfile = new UserProfModel({
  //   name,
  //   dob,
  //   loc,
  //   phoneNo,
  //   email,
  //   image,
  // });

  try {
    console.log("try");
   await multipleDocs.save();
   console.log(multipleDocs);
    console.log("UserProfile created successfully");
    response.status(201).json(multipleDocs);
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
  createUserDoc,
  getUserProfiles,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
};
