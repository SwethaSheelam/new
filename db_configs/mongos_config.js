const mongoose=require("mongoose");
const connetToDb=()=>{
    try{
       mongoose.connect(MONGO_URL)
    }catch(err){
        console.log("err in connecting to db");
        console.log("err")
    }
}