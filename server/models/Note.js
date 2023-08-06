const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
    },
    img: {
      data: Buffer,
      contentType: String,
      filename: String,
      path: String,
      size: String,
      destination: String,
    },
    category: {
      type: String,
      enum: ["home", "office", "personal","others"],
      default: "others",
      required: [true, "Category is required"],
    },
    title:{
        type:String,
        required: [true, "Title is required"],
    },
    body:{
        type:String,
        required: [true, "Body is required"],
    }
  },
  { timestamps: true }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

module.exports = Note;
