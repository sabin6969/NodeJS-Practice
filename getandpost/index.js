import express from "express";

// request made from browser is always get method
// for post method we have to use api testing softwares like thunder client, post man

const app = express();


app.post("/add",(req,res)=>{
    res.status(200).send("Post Method");
})


app.get("/users",(req,res)=>{
    // auth
    // getAll from db etc are performed
    res.status(200).send("Getting users");
})

app.get("/",(req,res)=>{
    res.status(200).send("Default route");
})

app.listen(3000,()=>{
    console.log("Server has started");
})


// get method is used for non sensitive information and small information (because url has certain limit)
// post method is used for sensitive information and for large data from client side
