const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    bio: {
        type: String
    },
    profile_pic: {
        type: String
    },
    basicInformation: [{
        age: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        gender: {
            type: Boolean,
            required: true
        },
        phoneno: {
            type: Number,
            required: true
        },
        birthday: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    }],
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);