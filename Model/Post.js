const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    Title: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});
module.exports = mongoose.model("Post", PostSchema);
