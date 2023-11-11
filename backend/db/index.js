const express = require('express')
const mongoose = require('mongoose')

const connect = (uri) => {
    mongoose.connect(uri), {
        newUnifiedTopology: true,
        useNewUrlParser: true,
    }
}

module.exports = connect;