const mongoose  = require("mongoose")

const UserSchema = mongoose.Schema({
    userName:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required: true,
        unique: false,
        default: Date.now(),
    },
    comment: {
        type: String,
        required: true
    },
    objData:{
        type:Object,

    }

})
module.exports = mongoose.model('user', UserSchema)