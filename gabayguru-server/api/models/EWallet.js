const mongoose = require("mongoose");
const { Schema } = mongoose;

const ewalletSchema = new Schema({
  balance: {
    type: Number,
    default: 0,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

const EWallet = mongoose.model("EWallet", ewalletSchema);

module.exports = EWallet;
