const express = require('express')
const app = express()
const cors = require('cors')
const connect = require('./db')
require('dotenv').config()
const handleError = require('./error/handleError')
const notFound = require('./middleware/notfound')
const router = require('./routers')
const port = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors());
app.use('/api/v1', router)
app.use(function (_req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// error handling middleware


app.use(notFound)
app.use(handleError)

const nodemon = async () => {
    try {
        await connect(process.env.DATABASE_CONNECTION)
        console.log("connected to database")
        console.log(`Server running on ${port}`)  
        app.listen(port, console.log(`server is listeing on port ${port}`))

    } catch (error) {
        console.log(err.message)
    }
}

nodemon ();