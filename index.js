let express = require("express");
let app = express();

app.get("/",(req,res)=>{
     res.send("Hello Welcome !!");
})
app.listen("1000",console.log("Port is running on 1000 !"));