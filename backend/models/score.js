const mongoose = require('mongoose')
const express = require('express')

const ScoreSchema = new Schema({

    score: {
        type: String
    },
    grade: {
        type: String
    },
    childId:{
        type:mongoose.Types.ObjectId,
        required:true
    }

})

const Score = mongoose.model("Score", ScoreSchema)

module.exports = Score;