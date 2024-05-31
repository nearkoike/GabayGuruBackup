const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const mentorController = require("../controllers/mentorControllers");
const adminController = require("../controllers/adminControllers");
const studentController = require("../controllers/studentControllers");

const { verifyToken } = require("../middlewares/authorize");

// get all users
router.get("/", userController.getAllUsers);

// get one user based on email
router.get("/:email", userController.getUser);

// get if user is mentor based on email
router.get("/student/:email", verifyToken, studentController.getStudent);

// get if user is mentor based on email
router.get("/mentor/:email", verifyToken, mentorController.getMentor);

// check if user is admin based on email
router.get("/admin/:email", verifyToken, adminController.getAdmin);

// create new user
router.post("/", userController.createUser);

// create new mentor
router.post("/mentor", mentorController.createMentor);

// verify user and create ewallet
router.put("/:userId/verify", userController.verifyUser);

// make user an admin
router.patch("/admin/:id", adminController.makeAdmin);

module.exports = router;
