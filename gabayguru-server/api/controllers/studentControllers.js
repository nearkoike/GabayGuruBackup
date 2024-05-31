const User = require("../models/User");

// return true if user is student
const getStudent = async (req, res) => {
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

    let student = false;
    if (user) {
      student = user?.role === "student";
      res.status(200).json({ student });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStudent,
};
