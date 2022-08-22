const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const cors_proxy = require('cors-anywhere')
const expresHttpProxy = require('express-http-proxy');

const HOST = process.env.HOST || '0.0.0.0'
const CORS_PORT = 8081
const PORT = process.env.PORT || 8080
const app = express();

const userRouter = require('./routes/user.routes');
const publicRouter = require('./routes/public.routes');
const jobRouter = require('./routes/job.routes');
const orderRouter = require('./routes/order.routes');


//This is to use the body requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//This is for the Router
app.use('/user', userRouter);
app.use('/', publicRouter);
app.use('/job', jobRouter);
app.use('/order', orderRouter);

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
//DB connection
dotenv.config();
connectDB();


cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(CORS_PORT, HOST, function() {
    console.log('Running CORS Anywhere on ' + HOST + ':' + CORS_PORT)
});

app.use(expresHttpProxy(`localhost:${CORS_PORT}`))




app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${HOST} port ${PORT}`))