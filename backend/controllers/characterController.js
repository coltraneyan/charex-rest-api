const asyncHandler = require("express-async-handler");

const Char = require("../models/characterModel");

// @desc Get Character
// @route GET /api/characters
// @access public

const getChar = asyncHandler(async (req, res) => {
  const chars = await Char.find();

  res.status(200).json(chars);
});

// @desc Set Character
// @route POST /api/characters
// @access public

const setChar = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a name field");
  }

  const char = await Char.create({
    name: req.body.name,
    attack: req.body.attack,
    health: req.body.health,
    special: req.body.special,
  });
  res.status(200).json(char);
});

// @desc Update Character
// @route PUT /api/characters
// @access public

const updateChar = asyncHandler(async (req, res) => {
  const char = await Char.findById(req.params.id);

  if (!char) {
    res.status(400);
    throw new Error("Character not found");
  }

  const updatedChar = await Char.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedChar);
});

// @desc Delete Character
// @route DELETE /api/characters
// @access public

const deleteChar = asyncHandler(async (req, res) => {
  const char = await Char.findById(req.params.id);

  if (!char) {
    res.status(400);
    throw new Error("Character not found");
  }

  await char.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getChar,
  setChar,
  updateChar,
  deleteChar,
};
