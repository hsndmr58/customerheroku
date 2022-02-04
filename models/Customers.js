const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const slugify=require('slugify')

const CustomersSchema=new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    debt:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    slug:{
        type:String,
        unique:true
    },
    works:[
        {
        
            type:String
        
        }
    ]

})
CustomersSchema.pre('validate',function(next){
    this.slug=slugify(this.name,{
        lower:true,
        strict:true
    })
    next();
})

const Customers=mongoose.model('Customers',CustomersSchema)
module.exports=Customers;