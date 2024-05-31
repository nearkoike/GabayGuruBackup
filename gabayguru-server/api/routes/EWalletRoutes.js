const express = require("express")
const router = express.Router();

const ewalletController = require("../controllers/ewalletControllers");

router.get("/", ewalletController.getAllEWallets);

module.exports = router;
