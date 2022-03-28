const mongoose =require ('mongoose');

const bookschema= new mongoose.Schema(
    {
        likes:{type:SVGAnimatedInteger,required:true},
        coverImg:{type:String,required:true},
        content:{type:String,required:true},
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

model.exports=mongoose.model("book",bookschema);