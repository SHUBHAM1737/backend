dotenv.config();
import connectDB from "./db/db.js"
import dotenv from "dotenv";

connectDB()  
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`SERVER IS RUNNING IN THE PORT : ${
            process.env.PORT
        }`);
        
    })
})
.catch((err)=>{
    console.log("DB connection error !!!" , err)

})