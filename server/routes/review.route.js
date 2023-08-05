const express = require('express');
const reviewController= require('../controllers/review.controller')


const router =express.Router()


router.route("/add").post(reviewController.addReview);
router.route("/all").get(reviewController.getReviews);


module.exports=router;
