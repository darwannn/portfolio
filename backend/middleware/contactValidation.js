const validateEmail = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = {};
  if (!name) {
    errors.name = "This field is required";
  }

  console.log("email", email);
  if (!email) {
    errors.email = "This field is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
  }

  if (!subject) {
    errors.subject = "This field is required";
  }

  if (!message) {
    errors.message = "This field is required";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).send({
      success: false,
      errors,
    });
  }

  next();
};

module.exports = {
  validateEmail,
};
