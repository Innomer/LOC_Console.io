
// var users = {}

const Chat = require("../models/chatModel");
const { UserModel } = require("../models/userModel");

// function getUsers(arr){
//     onlineUsers = []
//     arr.forEach((onlineUser) => {
//         onlineUsers.push(Object.values(onlineUser)[0])
//     })
//     return onlineUsers
// }

// function socket(io){
//     io.on('connection',(socket)=>{
//         socket.on('joined-user',(data)=>{
//             var user={};
//             user[socket.id]=data.username;
//             if(users[data.roomname]){
//                 users[data.roomname].push(user);
//             }
//             else{
//                 users[data.roomname]=[user];
//             }
//             socket.join(data.roomname);

//             io.to(data.roomname).emit('joined-user',{username:data.username});

//             io.to(data.roomname).emit('online-users',getUsers(users[data.roomname]))
//         })

//         socket.on('chat',(data)=>{
//             io.to(data.roomname).emit('chat',{username:data.username,message:data.message});
//         })

//         socket.on('typing',(data)=>{
//             socket.broadcast.to(data.roomname).emit('typing',data.username)
//         })

//         socket.on('disconnecting',()=>{
//             var rooms=Object.keys(socket.rooms);
//             var socketId=rooms[0];
//             var roomname = rooms[1];
//             users[roomname].forEach((user, index) => {
//                 if(user[socketId]){
//                     users[roomname].splice(index, 1)
//                 }
//             });
//             io.to(roomname).emit('online-users', getUsers(users[roomname]))
//         })
//     })
// }
// function roomRedirect(req,res){
//     roomname = req.body.roomname;
//     username = req.body.username;
//     res.redirect(`${req.headers.hostname}/room?username=${username}&roomname=${roomname}`);
// }

// module.exports={socket,roomRedirect};

const accessChat = async (req, res) => {
    try {
        const userId = req.body.userId;
        const user = await UserModel.findById(userId);
        if (!user) {
            res.json({
                message:"User not found"
            });
        }
        else{
            var isChat=await Chat.find({
                isGroupChat:false,
                $and:[
                    {users:userId},
                    {users:req.body.receiverId}    
                ]
            }).populate("users","-password").populate("latestMessage");
            isChat=await UserModel.populate(isChat,{
                path:'latestMessage.sender',
                select:"name email",
            });
            if(isChat.length>0){
                res.json(isChat[0]);
            }
            else{
                var chatData={
                    chatName:"sender",
                    isGroupChat:false,
                    users:[req.body.receiverId,userId]
                };
                const createChat=await Chat.create(chatData);
                const FullChat=await Chat.findOne({_id:createChat._id}).populate("users","-password");
                res.status(200).json(FullChat);
            }
        }
    }
    catch(err){
        console.log(err);
        res.json({
            error:"chatControllerError"+err
        })
    }
}
module.exports={accessChat};