const express = require('express')

const handleError = (req, res, err, next) => {
    return res.status(400).json({ message: err.message })
}

module.exports = handleError;