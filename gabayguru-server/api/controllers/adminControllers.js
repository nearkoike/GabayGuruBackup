const User = require("../models/User");

// return true if user is admin
const getAdmin = async (req, res) => {
  const email = req.params.email;

  if (!email) {
    return res.status(400).json({ message: "Email parameter is missing" });
  }

  const query = { email: email };
  
  try {
    const user = await User.findOne(query);
    const decodedEmail = req.decoded.email;
    
    if (email !== decodedEmail) {
      return res.status(403).send({ message: "Forbidden access" });
    }

    let admin = false;
    if (user) {
      admin = user?.role === "admin";
      res.status(200).json({ admin });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// make user an admin
const makeAdmin = async (req, res) => {
  const userId = req.params.id;
  const { fname, lname, email, contactNum, photoURL, role } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role: "admin" },
      { new: true, runValidators: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdmin,
  makeAdmin,
};
