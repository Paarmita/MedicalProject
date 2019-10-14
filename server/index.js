// "client": "npm run start --prefix Client",
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
const fs = require("fs");
// dotenv to remove this error MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
const dotenv = require("dotenv");
const config = require("./config");
dotenv.config();

// db
// MONGO_URI=mongodb://localhost/nodeapi
mongoose
    .connect(
        config.mongoUrl,
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

// bring in routes
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// apiDocs
app.get("/api", (req, res) => {
    fs.readFile("docs/apiDocs.json", (err, data) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        const docs = JSON.parse(data);
        res.json(docs);
    });
});

app.get("/hello", (req, res) => {
    res.json("Welcome to Medical Councelling");    
});

// middleware
app.use(morgan("dev"));             // Middleware: using morgan to log requests to the console
app.use(bodyParser.json());         // to parse the msg otherwise it shows undefined
app.use(cookieParser());            // cookieParser(secret, options)
app.use(expressValidator());
app.use(cors());
// app.get('/', postRoutes.getPosts);
app.use("/api", postRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {             // if encountered UnauthorizedError, provide this validation 
        res.status(401).json({ error: "Unauthorized!" });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});