const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 8080
const app = express();

const userRouter = require('./routes/user.routes');
const publicRouter = require('./routes/public.routes');

app.use('/user', userRouter)
app.use('/', publicRouter);

dotenv.config();
connectDB();

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`))