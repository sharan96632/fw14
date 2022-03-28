const mongoose =require ('mongoose');

const commentschema= new mongoose.Schema(
    {
        body:{type:String, required: true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

model.exports=mongoose.model("comment",commentschema);