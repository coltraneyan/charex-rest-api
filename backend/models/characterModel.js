const mongoose = require("mongoose");

const charSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: ["true", "Please give your character a name"],
    },
    attack: {
      type: Number,
      required: ["true", "Please give your character an attack value"],
    },
    health: {
      type: Number,
      required: ["true", "Please give your character a health value"],
    },
    special: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Character", charSchema);
