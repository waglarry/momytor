const mongoose = require('mongoose')
const express = require('express')

const Schema = mongoose.Schema;

const CoursesSchema = new Schema ({
    courseCode:{
        type:String      
    },
    
   courseName:{
            type: String
        },
    instructor:{
        type: String
    }    
    
})

const Course = mongoose.model("Course",CoursesSchema)

module.exports = Course;