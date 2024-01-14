const express = require("express")
const server = express()
const cors = require('cors');
const PORT = process.env.PORT || 3000

server.use(cors());


server.get("/", (req, res)=>{
    res.send("servidor funciona jaja")
})


server.listen(PORT, ()=>{console.log("server listo")})
