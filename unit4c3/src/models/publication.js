const mongoose =require ('mongoose');

const publicationschema= new mongoose.Schema(
    {
        name:{type:String, required: true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

model.exports=mongoose.model("publication",publicationschema);