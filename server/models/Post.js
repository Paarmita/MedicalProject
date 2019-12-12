const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  treatmentTaken: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  photo: {
    // type: String,
    data: Buffer,
    contenType: String
  },
  postedBy: {
    type: ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  likes: [{ type: ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Post", postSchema);
