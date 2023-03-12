const express = require("express");
const {
  createUserDoc,
  getUserProfiles,
  getUserProfile,
  editUserProfile,
  deleteUserProfile,
} = require("../controllers/userDocController");
const { upload } = require("../middlewares/multer");


const router = express.Router();

router.post("/addUserDoc", upload.array("files"), createUserDoc);
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
