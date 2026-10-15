
import app from "./app/app.js";
import { connectToDB } from "./config/db.js";
import config from "./config/config.js";


const PORT =  config.PORT
connectToDB()


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
}) 