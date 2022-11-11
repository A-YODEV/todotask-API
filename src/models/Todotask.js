const { Schema, model } = require("mongoose");

const todotaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlenght: 3,
      maxlenght: 20,
    },
    description: {
      type: String,
      required: true,
      minlenght: 3,
      maxlenght: 50,
    },
  },
  { timestamps: true }
);

const todotaskModel = model("todotasks", todotaskSchema);

module.exports = todotaskModel;
