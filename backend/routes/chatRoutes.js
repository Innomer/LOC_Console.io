const express=require('express');
const { accessChat } = require('../controllers/chatController');
// const { roomRedirect } = require('../controllers/chatController');
const router=express.Router();

// router.post('/room',roomRedirect);
router.post('/',accessChat);
router.get('/',fetchChats);

module.exports=router;