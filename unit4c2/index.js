const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connect mongo database
const connect =require("mongodb://127.0.0.1:27017/bank");
app.use(express.json());

app.listen(5500, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log("error");
    }
    console.log("listening on port 5500");
})

//-------------USER SCHEMA----------------//
const userschema = new mongoose.Schema(
    {
        first_name:{type:String, required: true},
        middle_Name:{type:String, required:false},
        last_Name:{type:String,required:true},
        age :{type:Number,required:true},
        email :{type:String,required:true},
        address :{type:String,required:true},
        gender :{type:String,required:true},
        createdAt:{type:Number,required:true},
        updatedAt:{type:Number,required:true},
    },{
        versionKey:false,
        timestamps:true,
    }
);

const user = mongoose.model("user",userschema);

//-------------BANK SCHEMA----------------//
const branchdetailSchema = new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    IFSC:{type:String, required:true},
    MICR:{type:String, required:true},
    createdAt:{type:Number,required:true},
    updatedAt:{type:Number,required:true},

},
{
    versionKey:false,
    timestamps:true,
}
);

const bank =mongoose.model("bank",branchdetailSchema);

//-------------MASTER SCHEMA----------------//

const MasterAccountSchema=new mongoose.Schema({
    balance:{type:Number,required:true},
    branch_Id : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "branchdetailSchema",
    required: true},
},
{
    versionKey:false,
    timestamps:true,
} 
);

const master =mongoose.model("master",MasterAccountSchema)


//-------------SAVINGS SCHEMA----------------//

const savingsAccountSchema = new mongoose.Schema({
    name:{type:String,required:true},
    accountNumber:{type:Number,unq:true},
    balance:{type:mongoose.Schema.Types.ObjectId,
             ref:"master",
             required:true},
    intrestRate:{type:Number,required:true},
    user_id: {type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true}
},{
    versionKey:false,
    timestamps:true,
});

const save =mongoose.model("save",savingsAccountSchema);

//-------------FIXED SCHEMA----------------//

const FixedAccountSchema = new mongoose.Schema({
    account_number:{type:Number, required: true},
    balance:{type:Number, required: true},
    intrestRate:{type:Number, required: true},
    startDate:{type:Number, required: true},
    maturityDate:{type:Number, required: true},
});

const fixed =mongoose.model("fixed",FixedAccountSchema);

//______________master CRUd_______________//

//sc - 1  : getting the data from server
app.get("/:master_ID/users", async(req,res)=>{
    try {
        const all = await master.find({master_id: req.params.master_ID}).lean().exec();
        return res.status(200).send({master: all});
    } catch (error) {
        return res.status(500).send({error: error});
    }
});




//______________save CRUd_______________//
//ac - 1  : getting the data from the server
app.get("/save",async (req,res) =>{
    try {
        const save = await save.find()
        .populate("user_Id")
        .populate("branch_id")
        .lean().exec();;
        return res.status(200).send({save: save});
    } catch (error) {
        console.log(error);
        return res.status(500).send("Please try ater some time");
    }
});

//ac - 2:  posting the data to the server
app.post("/savings", async(req,res)=>{
    try {
        const savings = await Author.create(req.body);
        return res.status(201).send(save);
    } catch (error) {
        return res.status(500).send(error);
    }
});

//____________fixed CRUD__________________//
//bc - 1: getting the data from the server
app.get("/fixed", async(req,res)=>{
    try {
        const fixed = await fixed.find()
             .populate("user_Id")
             .populate("branch_id")
             .lean().exec();
        return res.status(200).send({fixed:fixed});
    } catch (error) {
        console.log(error);
        return res.status(500).send("plase tyr after  some time");
    }
});

//bc - 1: posting the data to the server
app.post("/books",async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        return res.status(201).send({book:book})

    } catch (error) {
        return res.status(500).send({error:error});
    }
});