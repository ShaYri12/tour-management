import express from 'express'
import {deleteUser, getAllAdmins, getAllUser, getSingleUser,  updateUser } from './../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);

//get single User
router.get("/:id", verifyUser, getSingleUser);

//get all Users
router.get("/", verifyAdmin, getAllUser);

//get all Admins
router.get("/search/admins", verifyAdmin, getAllAdmins);


export default router;