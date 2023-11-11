const express = require('express')
const User = require('../models/authSchema')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const { genToken } = require('../utils/acessToken')
const { verifyToken } = require('../utils/acessToken')
require('dotenv').config()

const mail_name = process.env.USER_NAME;
const password = process.env.APP_PASSWORD;

//handle errors
const handleError = (err) => {
    let errors = { email: "", password: "", name: "", confrimPassword: "", wardsName: "" };

    //handling duplicate errors
    if (err.code === 11000) {
        errors.email = "This email is already registered";
        return errors
    }

    //validating errors
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;

        });
    }
    return errors
    //{ message: errors.password, message: errors.name, message: errors.email }
}

const signUP = async (req, res, next) => {
    const { email, password, name, confirmPassword, wardsName } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        //create a new user
        const newUser = new User({ email, password, name, confirmPassword, wardsName, isVerified: true });
        await newUser.save();
        return res.status(200).json({ message: "User created successfully" })
    }
    catch (err) {
        const errors = handleError(err)
        return res.status(400).json({ errors });
    }

};
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        //checking if user provided username and password
        const notUser = !email || !password;
        if (notUser) {
            return res.status(400).json({
                message: "username or password not present",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }
        if (!user.isVerified) {
            return res.status(403).json({ error: 'Account not verified' });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) return next(err);
            if (result) {
                let token = genToken({ email, });
                return res.status(200).json({
                    message: "login Successful",
                    token,

                });
            } else {
                return res.status(400).json({
                    message: "Login not successfull",
                });
            }
        });

    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            error: error.message,
        });
    }
};


//nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: mail_name,
        pass: password,
    },
})

const genOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = crypto.randomBytes(3).toString('hex')
        //compose the email
        const mailOptions = {
            from: mail_name,
            to: email,
            subject: 'Account Verification',
            html: `<div>
            <p> Dear user, below is your verification code</p>
            <h1> ${otp} </h>
            </div>`
        };
        //send the mail
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ token: genToken({ email, otp }), message: "check your email for verification" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const confirmOTP = (async (req, res, next) => {
    try {
        const { otp } = req.body;
        const tokenData = verifyToken(req.headers['authorization'].split(' ')[1])
        if (tokenData.code) return res.status(401).json({ message: 'Unauthorized' })
        if (tokenData.otp === otp) return next()
        else {
            return res.status(400).json({ message: 'incorrect otp' })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        // Generate a unique token
        const token = crypto.randomBytes(20).toString("hex");

        // Find the user by their email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User is not found" });
        }

        // Validate the user's email verification status
        if (!user.isVerified) {
            return res.status(403).json({ error: "Account not verified" });
        }

        // Store the token and generate the tokenExpires field in the user's records
        user.passwordResetToken = token;
        user.passwordResetTokenExpires = Date.now() + 3600000;
        await user.save();

        // Send the password reset email
        const mailOptions = {
            from: mail_name,
            to: user.email,
            subject: "Reset password",
            text:
                `You or someone sent a request to change your email password\n\n` +
                `Please ignore if not necessary or follow the link to reset your password:\n\n` +
                `${process.env.FRONTEND_URL}/resetPassword/${token}\n\n`,
        };
        transporter.sendMail(mailOptions, async (error, info) => {
            if (error) {
                return res.status(500).json({ message: "Email not sent! Failed" });
            }

            return res.status(200).json({
                message: "Password link sent to the email provided",
            });
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        //find user by toke and the duration the token expires
        const user = await User.findOne({
            passwordResetToken: token,
            passwordResetTokenExpires: { $gt: Date.now() },
        });
        if (!user) {
            return res
                .status(400)
                .json({ message: "token is invalid or has expired" });
        }

        //reseting the password
        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpires = undefined;
        await user.save();

        return res
            .status(200)
            .json({ sucess: true, message: "Password reset sucessful" });
    } catch (error) {
        res.status(400).json({
            message: "something went wrong",
            error: error.message,
        });
    }
};

module.exports = {
    handleError,
    signUP,
    login,
    genOTP,
    confirmOTP,
    forgotPassword,
    resetPassword
}