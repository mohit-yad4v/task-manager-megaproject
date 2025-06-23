import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({ min: 3 }).withMessage("Username should be atleast 3 char")
            .isLength({ max: 13 }).withMessage("Username cannot exceed 13 char"),
        body("fullname")
            .notEmpty().withMessage("Full name is required")
            .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)+$/).withMessage("Please enter your full name (keep space between first and last name)"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 8 }).withMessage("Password should be atleast of 8 char"),
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/)
        // .withMessage("Password must contain uppercase, lowercase, number, and special character")
    ];
};

const userLoginValidator = () => {
    return [
        body("email")
            .isEmail().withMessage("Email is not valid"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 8 }).withMessage("Password should be atleast of 8 char"),
    ];
};

export {
    userRegistrationValidator,
    userLoginValidator
};