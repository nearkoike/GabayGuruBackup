const EWallet = require("../models/EWallet");

const getAllEWallets = async(req, res) => {
    try {
        const ewallets = await EWallet.find({});
        res.status(200).json(ewallets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllEWallets
}