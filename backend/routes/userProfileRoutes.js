const express = require("express");
const {
  createUserProf,
  getUserProfiles,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
} = require("../controllers/userProfileController");
const { upload } = require("../middlewares/multer");

const router = express.Router();

router.post("/addUserProfile",createUserProf);
router.get("/allUserProfiles", getUserProfiles);
router.get("/:id", getUserProfile);
router.put("/:id", editUserProfile);
router.delete("/:id", deleteUserProfile);

// router.get("/all", (req, res) => {
//   console.log("Hey!");
//   res.send("Hey , Kreena here!");
// });

// router.get("/home", auth, (req, res) => {
//   console.log("Welcome");
//   res.status(200).send("Welcome 🙌 ");
// });

module.exports = router;
