const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const WorksSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },

})


const Works=mongoose.model('Works',WorksSchema)
module.exports=Works;