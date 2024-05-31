const Mentor = require("../models/Mentor");
const User = require("../models/User");

// return true if user is mentor
const getMentor = async (req, res) => {
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

    let mentor = false;
    if (user) {
        mentor = user?.role === "mentor";
      res.status(200).json({ mentor });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// post/create a mentor
const createMentor = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };

  try {
    const existingUser = await User.findOne(query);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const result = await Mentor.create(user);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMentor,
  createMentor,
};
