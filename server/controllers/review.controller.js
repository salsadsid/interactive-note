const { addReviewService, getReviewsService } = require("../services/review.service")

exports.addReview=async(req,res)=>{
    try {
        const result = await addReviewService(req.body)

        res.status(200).json({
            status: "Success",
            message: "Successfully Added Review",
          });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            error,
          });
    }
}
exports.getReviews=async(req,res)=>{
    try {
        // console.log("Dasde")
        const result = await getReviewsService()

        res.status(200).json({
            status: "Success",
            message: "Review found",
            data:result
          });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            error,
          });
    }
}