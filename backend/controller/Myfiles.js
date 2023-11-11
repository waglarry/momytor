const File = require('../models/file')
const express = require('express')
const cloudinary = require('cloudinary');
require('dotenv').config()

var CLOUDINARY_UPLOAOD_PRESET = "hdolrq4j/mh/upload"
var CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dp5qgqy1d/mh/upload"

cloudinary.v2.config({
    cloud_name: 'dp5qgqy1d',
    api_key: process.env.CLOUDINARY_API_KEY,
    url: CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});
const addFile = async (req, res,next) => {
    const { Myfile } = req.body; // You can access other form fields here
    try {
        const results = await cloudinary.v2.uploader.upload(req.file.path, {
            resource_type: 'auto',
            folder: CLOUDINARY_UPLOAOD_PRESET
        });
        
        if (results?.secure_url) {
            const data = {
                Myfile,
                contentType: req.file.mimetype,
                filename: req.file.originalname, // Use req.file.originalname to get the original filename
                file_url: results?.secure_url,
                format: results?.format
            }
            const newFile = await File.create(data);
             return await  res.status(200).json({ message: "File added successfully", file: newFile });
        }
    } catch (error) {
        console.log(error)
       return await   res.status(error.code || 400).json({
            message: error.message || "An error occurred",
            error: error.message,
        });
    }
};

module.exports = addFile


