import express from 'express'
import {deleteUser, getAllUser,getSingleUser, updateUser } from './../controllers/userController.js'

const router = express.Router();

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get single User
router.get("/:id", getSingleUser);

//get all Users
router.get("/", getAllUser);

export default router;