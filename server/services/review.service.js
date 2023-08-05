const Review = require("../models/Review")

exports.addReviewService=async(review)=>{
    const result = await Review.create(review)
}