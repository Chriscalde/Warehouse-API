const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080
const app = express();

const userRouter = require('./routes/user.routes');
const publicRouter = require('./routes/public.routes');




//This is to use the body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//This is for the Router
app.use('/user', userRouter);
app.use('/', publicRouter);

app.use(cors());
//DB connection
dotenv.config();
connectDB();

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`))