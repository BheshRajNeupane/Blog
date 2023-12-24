

const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,' must have a  title'],
        trim:true,
        maxlength:[100,'A title of blog  have less or equal then 100 character'],
    },

    author:{
        type:String,
        required:[true,' Must have a author name'],
    },
 

    category:{
        type:String,
        required: [true , 'Must have category'],
        enum:['Sport' ],
    },

    description:{
        type:String,
        required : true
    }

})

const Blog= mongoose.model('Blog' , BlogSchema);

module.exports = Blog;