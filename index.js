const express = require("express");
const app = express();

app.listen(4000,()=>{
    console.log("Server http://localhost:4000/ is running")
})

app.get("/",(request,response)=>{
    response.sendFile("./index.html",{root:__dirname});
})
