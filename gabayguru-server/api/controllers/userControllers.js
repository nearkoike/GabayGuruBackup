const EWallet = require("../models/EWallet");
const Mentor = require("../models/Mentor");
const User = require("../models/User");

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get one user by email
const getUser = async (req, res) => {
  const email = req.params.email;
  const query = {email: email}

  try {
    const user = await User.findOne(query);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// post/create a user
const createUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };

  try {
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const result = await User.create(user);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// verify a user
const verifyUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const verifiedUser = await User.findByIdAndUpdate(userId, { verified: true });

        // create an ewallet for verified user
        const newEWallet = new EWallet({ owner: userId });
        await newEWallet.save();

        // update user to include ewallet reference
        verifiedUser.ewallet = newEWallet._id;
        await verifiedUser.save();

        res.status(200).json({ message: 'User verified and ewallet created successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

// delete user
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    // if user not found
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



module.exports = {
  getAllUsers,
  getUser,
  createUser,
  verifyUser,
  deleteUser,
  

};
