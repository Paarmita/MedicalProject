const mongoose = require("mongoose");

const diseaseSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bestTherapy: {
        type: String
    },
    allopathy:{
        efficiency: String,
        advantages: String,
        disadvantages: String,
        summary: String,
        suggestions: [String]
    },
    homeopathy:{
        efficiency: String,
        advantages: String,
        disadvantages: String,
        summary: String,
        suggestions: [String]
    },
    ayurveda:{
        efficiency: String,
        advantages: String,
        disadvantages: String,
        summary: String,
        suggestions: [String]
    },
})

module.exports = mongoose.model('Disease',diseaseSchema);