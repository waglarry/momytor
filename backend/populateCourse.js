// const express = require('express')
// const connect = require('../backend/db/index')
// const mongoose = require('mongoose')
// const CourseJson = require('../backend/course.json')
// const Course = require('../backend/models/courseSchema')
// require('dotenv').config()

// const start = async () => {
//     try {
//         await connect(process.env.DATABASE_CONNECTION);
//         await Course.deleteMany();
//         await Course.create(CourseJson);
//         console.log('sucess')
      

//     } catch (error) {
//         console.log(error);
      
//     }
// }

// start()