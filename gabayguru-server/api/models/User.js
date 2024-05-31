const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNum: String,
  idURL: String,
  ewallet: {
    type: Schema.Types.ObjectId,
    ref: 'EWallet'
  },
  role: {
    type: String,
    enum: ["student", "mentor", "admin"],
  },
  verified: {
    type: Boolean,
    default: false
  },
  photoURL: String
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
