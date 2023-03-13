const { UserImageModel} = require("../models/userImageModel");

const addImageModel = async (request, response) => {
  console.log("Usercontroller => addListing");
//   console.log(request.body);
  // console.log(request.file);
  // const image = (request.file) ? request.file.filename : null ;
  // console.log("Image declare krne ke baad",image);
  // const listing = request.body;

//   const {title , description , location , startDate , endDate , rules , price , noOfPeople , ammenities } = request.body;
//   const listing = {
//     title,
//     description,
//     location,
//     startDate,
//     endDate,
//     rules,
//     price,
//     noOfPeople,
//     ammenities,
//     image
//   };
//   const { error } = validateListing(listing);
//   if (error) {
//     console.log(error.details[0].message);
//     return response.status(400).send({ message: error.details[0].message });
//   }
  base64=request.body.base64;
  const newUserImage = new UserImageModel({
    base64,
  });
  try {
    console.log("try");
    await newUserImage.save();
    response.status(201).json(newUserImage);
    console.log("newUserImage done successfully");
    // console.log(listing)
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getUserImage = async (request, response) => {
    try {
      // console.log(request.params.email);
      const userImage = await UserImageModel.findOne({
       id: request.params._id,
      });
      // const user = await User.findById(request.params.id);
      response.status(200).json(userImage);
      // console.log(user);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  
module.exports = { addImageModel, getUserImage };
