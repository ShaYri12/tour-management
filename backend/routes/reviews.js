import express from 'express'
import {createReview } from './../controllers/reviewController.js'

const router = express.Router();

router.post("/:tourId", createReview);

//To delete review
// router.delete("/login", deleteReview);

export default router;