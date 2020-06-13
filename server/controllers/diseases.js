const Disease = require('../models/disease');
const formidable = require("formidable"); // for handling file uploads
const fs = require("fs"); // file system
const _ = require("lodash");

exports.hasAdminAuthorization = (req, res, next) => {
    let adminUser = req.profile && req.auth && req.auth.role === "admin";

    const authorized = adminUser;

    // console.log("req.profile ", req.profile, " req.auth ", req.auth);
    console.log("ADMINUSER", adminUser);

    if (!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        });
    }
    next();
};