const User = require("../models/User");

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

const getUserByEmail = async ({userEmail}) => {
  const query = { email: userEmail };

  try {
    const user = await User.findOne(query)
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

module.exports = { getUserById, getUserByEmail };
