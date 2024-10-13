const express = require("express");
const cors = require("cors");

const {request}= require("http");
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server listening on PORT:',PORT)
});

app.get('/users',(request, response)=>{
    const status = [{Name: "David", Age: "18",},
        {Name: "Jenny", Age:"13"}, {Name: "Canelo", Age:"1"}];
    response.send(status);
    
});