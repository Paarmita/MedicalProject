const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require("express-jwt"); // for protected routes
const User = require("../models/user");

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email is taken!"
    });
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({ message: "Signup success! Please login." });
};

exports.signin = (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    // if err or no user
    if (err || !user) {
      return res.status(401).json({
        error: "User with that email does not exist. Please signin."
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in model and use here
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }
    // generate a token with user id and secret
    // const token = jwt.sign({ _id: user._id  }, process.env.JWT_SECRET);
    const token = jwt.sign({ _id: user._id, role: user.role}, "secret");
    // persist the token as 't' in cookie with expiry date
    res.cookie("t", token, { expire: new Date() + 9999 });
    // return response with user and token to frontend client
    // const { _id, name, email } = user;
    // return res.json({ token, user: { _id, email, name } });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "Signout success!" });
};

exports.requireSignin = expressJwt({
  //only when sign in access the post routes
  secret: "secret",
  userProperty: "auth"
});
// if user is signed in, it checks the secret key and token,so this should match with our requireSignin function
