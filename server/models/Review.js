const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,  
    },
    companyName: {
      type: String,
     
    },
    logo: {
      type:String
    },
    website: {
      type: String,   
    },   
  },
  { timestamps: true }
);



const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

module.exports = Review;
