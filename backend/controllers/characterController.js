const asyncHandler = require("express-async-handler");

// @desc Get Character
// @route GET /api/characters
// @access public

const getChar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get characters" });
});

// @desc Set Character
// @route POST /api/characters
// @access public

const setChar = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "create characters" });
});

// @desc Update Character
// @route PUT /api/characters
// @access public

const updateChar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update character ${req.params.id}` });
});

// @desc Delete Character
// @route DELETE /api/characters
// @access public

const deleteChar = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete character ${req.params.id}` });
});

module.exports = {
  getChar,
  setChar,
  updateChar,
  deleteChar,
};
