const { validate } = require("../middleware/validator");

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .withMessage("password should be at least 4 characters"),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("nickname").notEmpty().withMessage("nickname is missing"),
  body("email").isEmail().normalizeEmail().withMessage("invalid Email"),
];
