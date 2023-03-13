const express = require("express");
const { addImageModel, getUserImage } = require("../controllers/userImageController");
const { upload } = require("../middlewares/multer");
const router = express.Router();

router.post("/addImage", addImageModel);
// router.get("/allListing", getListings);
router.get("/:id", getUserImage);
// router.put("/:id", editListing);
// router.delete("/:id", deleteListing);

// router.get("/all", (req, res) => {
//   console.log("Hey!");
//   res.send("Hey , Kreena here!");
// });

// router.get("/home", auth, (req, res) => {
//   console.log("Welcome");
//   res.status(200).send("Welcome 🙌 ");
module.exports=router;