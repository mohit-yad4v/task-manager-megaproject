import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
    const { email, username,fullname, password } = req.body;

    //validation
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const logoutUser = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const verifyEmail = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const resendVerificationEmail = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const resetForgottenpassword = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});

const getCurrentUser = asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;

    //validation
});



export {
    registerUser,
    changeCurrentPassword,
    forgotPasswordRequest,
    getCurrentUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    resendVerificationEmail,
    resetForgottenpassword,
    verifyEmail
};