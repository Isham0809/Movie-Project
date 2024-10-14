const express = require("express");
const {
  home,
  insertData,
  deleteData,
  edit,
  updateData,
  add_movie,
} = require("../controllers/movieDataController");
const { validation } = require("../middlewares/validation");

const router = express.Router();

router.get("/", home);
router.get("/add_movie", add_movie);
router.get("/editData/:id", edit);
router.post("/insertData",validation, insertData);
router.get("/deleteData/:id", deleteData);
router.post("/updateData", updateData);

module.exports = router;