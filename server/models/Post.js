const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var commentSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        timestamps: true,
        avatar: {
            type: String
        },
        photos: {
            type: [String]
        },
        date: {
            type: Date,
            default: Date.now
        },
    });


const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    timestamps: true,
    treatment: {
        type: String,
        required: true
    },
    detailed_info: {
        type: String,
        required: true
    },
    resume: {
        type: [String]
    },
    photos: {
        type: [String]
    },
    allergies: {
        type: [String],
        required: true
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    }],
    comments: [commentSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("post", postSchema);