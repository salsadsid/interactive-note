const { addReviewService } = require("../services/review.service")

exports.addReview=async(req,res)=>{
    try {
        const result = await addReviewService(req.body)
    } catch (error) {
        
    }
}