const mongoose= require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb+srv://pinterest:lucknow@cluster0.r1qhljp.mongodb.net/nice?retryWrites=true&w=majority");
const userSchema= mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    profileImage: String,
    contact: Number,
    boards:{
        type: Array,
        default:[]
    },
    posts: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

userSchema.plugin(plm);
module.exports=mongoose.model("user",userSchema);