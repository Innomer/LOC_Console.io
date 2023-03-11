require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/adminRoutes');
const loginRoutes = require('./routes/loginRegRoutes');
const fileUploadRoutes=require('./routes/fileUploadRoutes');
const chatRoutes=require('./routes/chatRoutes');
const bodyParser = require('body-parser');

mongoose.set("strictQuery", true);
mongoose.connect('mongodb://0.0.0.0:27017/hackniche', { useUnifiedTopology: true, useNewUrlParser: true, });
mongoose.connection.on('error', err => console.log(err));
mongoose.connection.on('connected', con => console.log("connected to DB"));
mongoose.connection.on('disconnected', con => console.log("disconnected from DB"));

const socket = require('socket.io');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/ProfileImages", express.static("ProfileImages"));

app.use('/', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/file',fileUploadRoutes);
app.use('/chat',chatRoutes);


// const http = require('http');
// const server = http.createServer(app);
// const io=socket(server);
// // require('./controllers/chatController');
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(8080, () => {
    console.log('Server started at 8080');
});