const mongoose = require('mongoose')
const express = require('express')
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String
    },
    class: {
        type: String
    },
    email: {
        type: String
    },
    attendance: {
        type: Boolean
    },
    courseProgress: {
        type: Object
    },
    skill:{
        type:Object
    }

})

const Child = mongoose.model("Child", ChildSchema)
module.exports = Child;