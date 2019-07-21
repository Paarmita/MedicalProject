// const User = require("../models/user");
// const _ = require("lodash");
// const formidable = require("formidable"); // for handling file uploads
// const fs = require("fs");

// // id comes from used params
// exports.userById = (req, res, next, id) => {
//   User.findById(id)
//     // populate followers and following users array
//     .populate("following", "_id name")
//     .populate("followers", "_id name")
//     .exec((err, user) => {
//       if (err || !user) {
//         return res.status(400).json({
//           error: "User not found"
//         });
//       }
//       req.profile = user; // adds profile object in req with user info
//       next();
//     });
// };

// exports.hasAuthorization = (req, res, next) => {
//   const authorized =
//     req.profile && req.auth && req.profile._id === req.auth._id;
//   if (!authorized) {
//     return res.status(403).json({
//       error: "User is not authorized to perform this action"
//     });
//   }
// };

// // get all users
// exports.allUsers = (req, res) => {
//   User.find((err, users) => {
//     if (err) {
//       return res.status(400).json({
//         error: err
//       });
//     }
//     res.json(users);
//     // res.json({ users });      getting data in this format {"users":[{"_id":"5d2afa32d15a396c0da62e20","name":"paarmita","email":"paarmita@gmail.com","created":"2019-07-14T09:47:30.532Z"}]}  which cannot be mapped
//   }).select("name email updated created"); // to not show password and other irrelevant stuff
// };

// // to get a single user
// exports.getUser = (req, res) => {
//   // return res.json(req.profile);
//   req.profile.hashed_password = undefined; // so that no one could see this in frontend before making the request
//   req.profile.salt = undefined;
//   return res.json(req.profile);
// };

// // exports.updateUser = (req, res, next) => {
// //   let user = req.profile;
// //   user = _.extend(user, req.body); // extend - mutate the source object
// //   user.updated = Date.now(); // update the updated value with current date
// //   user.save(err => {
// //     if (err) {
// //       return res.status(400).json({
// //         error: "You are not authorized to perform this action"
// //       });
// //     }
// //     user.hashed_password = undefined;
// //     user.salt = undefined;
// //     // res.json({ user });     // return user
// //     res.json(users);
// //   });
// // };

// exports.updateUser = (req, res, next) => {
//   // like post
//   let form = new formidable.IncomingForm();
//   form.keepExtensions = true;
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Photo could not be uploaded"
//       });
//     }
//     // save user
//     let user = req.profile;
//     user = _.extend(user, fields);
//     user.updated = Date.now();

//     if (files.photo) {
//       user.photo.data = fs.readFileSync(files.photo.path);
//       user.photo.contentType = files.photo.type;
//     }

//     user.save((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err
//         });
//       }
//       user.hashed_password = undefined;
//       user.salt = undefined;
//       res.json(user);
//     });
//   });
// };

// // exports.updateUser = (req, res, next) => {
// //     let user = req.profile;
// //     user = _.extend(user, req.body); // extend - mutate the source object
// //     user.updated = Date.now();
// //     user.save(err => {
// //         if (err) {
// //             return res.status(400).json({
// //                 error: "You are not authorized to perform this action"
// //             });
// //         }
// //         user.hashed_password = undefined;
// //         user.salt = undefined;
// //         res.json({ user });
// //     });
// // };

// exports.userPhoto = (req, res, next) => {
//   if (req.profile.photo.data) {
//     res.set(("Content-Type", req.profile.photo.contentType));
//     console.log("hsdbfjhds", req.profile );
//     return res.send(req.profile.photo.data);
//   }
//   next();
// };

// exports.deleteUser = (req, res, next) => {
//   let user = req.profile;
//   user.remove((err, user) => {
//     if (err) {
//       return res.status(400).json({
//         error: err
//       });
//     }
//     res.json({ message: "User deleted successfully" });
//   });
// };

// // follow unfollow
// exports.addFollowing = (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.body.userId,
//     { $push: { following: req.body.followId } },
//     (err, result) => {
//       if (err) {
//         return res.status(400).json({ error: err });
//       }
//       next();
//     }
//   );
// };

// exports.addFollower = (req, res) => {
//   User.findByIdAndUpdate(
//     req.body.followId,
//     { $push: { followers: req.body.userId } },
//     { new: true }
//   )
//     .populate("following", "_id name")
//     .populate("followers", "_id name")
//     .exec((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err
//         });
//       }
//       result.hashed_password = undefined;
//       result.salt = undefined;
//       res.json(result);
//     });
// };

// // remove follow unfollow
// exports.removeFollowing = (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.body.userId,
//     { $pull: { following: req.body.unfollowId } },
//     (err, result) => {
//       if (err) {
//         return res.status(400).json({ error: err });
//       }
//       next();
//     }
//   );
// };

// exports.removeFollower = (req, res) => {
//   User.findByIdAndUpdate(
//     req.body.unfollowId,
//     { $pull: { followers: req.body.userId } },
//     { new: true }
//   )
//     .populate("following", "_id name")
//     .populate("followers", "_id name")
//     .exec((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err
//         });
//       }
//       result.hashed_password = undefined;
//       result.salt = undefined;
//       res.json(result);
//     });
// };

// exports.findPeople = (req, res) => {
//   let following = req.profile.following;
//   following.push(req.profile._id);
//   User.find({ _id: { $nin: following } }, (err, users) => {
//     if (err) {
//       return res.status(400).json({
//         error: err
//       });
//     }
//     res.json(users);
//   }).select("name");
// };

const _ = require("lodash");
const User = require("../models/user");
const formidable = require("formidable");
const fs = require("fs");

exports.userById = (req, res, next, id) => {
    User.findById(id)
        // populate followers and following users array
        .populate("following", "_id name")
        .populate("followers", "_id name")
        .exec((err, user) => {
            if (err || !user) {
                return res.status(400).json({
                    error: "User not found"
                });
            }
            req.profile = user; // adds profile object in req with user info
            next();
        });
};

exports.hasAuthorization = (req, res, next) => {
    let sameUser = req.profile && req.auth && req.profile._id == req.auth._id;
    let adminUser = req.profile && req.auth && req.auth.role === "admin";

    const authorized = sameUser || adminUser;

    // console.log("req.profile ", req.profile, " req.auth ", req.auth);
    console.log("SAMEUSER", sameUser, "ADMINUSER", adminUser);

    if (!authorized) {
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        });
    }
    next();
};

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    }).select("name email updated created role");
};

exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

// exports.updateUser = (req, res, next) => {
//     let user = req.profile;
//     user = _.extend(user, req.body); // extend - mutate the source object
//     user.updated = Date.now();
//     user.save(err => {
//         if (err) {
//             return res.status(400).json({
//                 error: "You are not authorized to perform this action"
//             });
//         }
//         user.hashed_password = undefined;
//         user.salt = undefined;
//         res.json({ user });
//     });
// };

exports.updateUser = (req, res, next) => {
    let form = new formidable.IncomingForm();
    // console.log("incoming form data: ", form);
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not be uploaded"
            });
        }
        // save user
        let user = req.profile;
        // console.log("user in update: ", user);
        user = _.extend(user, fields);

        user.updated = Date.now();
        // console.log("USER FORM DATA UPDATE: ", user);

        if (files.photo) {
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        user.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            user.hashed_password = undefined;
            user.salt = undefined;
            // console.log("user after update with formdata: ", user);
            res.json(user);
        });
    });
};

exports.userPhoto = (req, res, next) => {
    if (req.profile.photo.data) {
        res.set(("Content-Type", req.profile.photo.contentType));
        // return res.send(req.profile.photo.data);
        return res.send(req.profile.photo.data);
    }
    next();
};

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({ message: "User deleted successfully" });
    });
};

// follow unfollow
exports.addFollowing = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.userId,
        { $push: { following: req.body.followId } },
        (err, result) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            next();
        }
    );
};

exports.addFollower = (req, res) => {
    User.findByIdAndUpdate(
        req.body.followId,
        { $push: { followers: req.body.userId } },
        { new: true }
    )
        .populate("following", "_id name")
        .populate("followers", "_id name")
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result);
        });
};

// remove follow unfollow
exports.removeFollowing = (req, res, next) => {
    User.findByIdAndUpdate(
        req.body.userId,
        { $pull: { following: req.body.unfollowId } },
        (err, result) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            next();
        }
    );
};

exports.removeFollower = (req, res) => {
    User.findByIdAndUpdate(
        req.body.unfollowId,
        { $pull: { followers: req.body.userId } },
        { new: true }
    )
        .populate("following", "_id name")
        .populate("followers", "_id name")
        .exec((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            result.hashed_password = undefined;
            result.salt = undefined;
            res.json(result);
        });
};

exports.findPeople = (req, res) => {
    let following = req.profile.following;
    following.push(req.profile._id);
    User.find({ _id: { $nin: following } }, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(users);
    }).select("name");
};