const express = require("express");
const router = express.Router();
const {
  getChar,
  setChar,
  updateChar,
  deleteChar,
} = require("../controllers/characterController");

router.route("/").get(getChar).post(setChar);

router.route("/:id").put(updateChar).delete(deleteChar);

module.exports = router;
