const express = require("express");
const router = express.Router();
const { validateEmail } = require("../middleware/contactValidation");
const contactController = require("../controllers/contactController");

router.post("/api/email", validateEmail, contactController.sendEmail);

module.exports = router;
