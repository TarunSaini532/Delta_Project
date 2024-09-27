const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
let {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

//REVIEWS
//POST ROUTE

router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Delete Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
