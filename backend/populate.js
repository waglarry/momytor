// const express = require('express')
// const connect = require('../backend/db/index')
// const mongoose = require('mongoose')
// const app = express()
// const teachersJson = require('../teachers.json')
// const Teachers = require('../backend/models/TeachersSchema')
// require('dotenv').config()

// const start = async () => {
//     try {
//         await connect(process.env.DATABASE_CONNECTION);
//         await Teachers.deleteMany();
//         await Teachers.create(teachersJson);
//         console.log('sucess')
        

//     } catch (error) {
//         console.log(error);
       
//     }
// }

// start()
