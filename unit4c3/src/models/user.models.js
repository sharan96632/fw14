const mongoose =require ('mongoose');

const userschema= new mongoose.Schema(
    {
        first_name:{type:String, required: true,"minLength": 3, "maxLength": 30},
        last_Name:{type:String,required:true,"minLength": 3, "maxLength": 30},
        age:{type:SVGAnimatedInteger,required:true,"minimum": 1,"maximum":150},
        email :{type:String,required:true},
        password:{type:String,required:true},
        profilePic:[{type:String,required:false}]
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
userschema.pre("save",(next)=>{
 return next()
})

model.exports=mongoose.model("user", userschema);