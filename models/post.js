const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:{
        type:Sting ,
        required:true
    },
    descpriction:{
        type:Sting ,
        required:true
    },
    date: {
        type:Date ,
        default: Date.now
    }
});


module.exports = mongoose.model('Psots',PostSchema);



