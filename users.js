const mongoose= require ('mongoose');

const userSchema = new mongoose.userSchema(
    {
        name:({type:String, required:true}),
        email:({type:String, required:true}),
        age:({type:Number, required:true})
    }
);
module.exports= mongoose.model('user', userSchema);