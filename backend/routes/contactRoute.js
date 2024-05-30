const express = require("express");
const router = express.Router();
const { validateEmail } = require("../middleware/contactValidation");
const contactController = require("../controllers/contactController");

router.post("/contact", validateEmail, contactController.sendEmail);

module.exports = router;
