const Review = require("../models/Review")

exports.addReviewService=async(review)=>{
    const result = await Review.create(review)
    return result
}
exports.getReviewsService=async(review)=>{
    const result = await Review.find({})
    return result
}