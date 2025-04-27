import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let addItem=[];

app.get("/",(req,res)=>{
    // res.send("hello world!!");
    const d=new Date().toLocaleDateString("en-US",{
        weekday:'long',
        month:'long',
        day:'numeric',
    });
    // console.log(d); 
    res.render("index.ejs",{
        day:d,
        newItem:addItem,
    });
});

app.post("/",(req,res)=>{
    const newItem=req.body.newItem;
    if(newItem.trim()!==""){
        addItem.push(newItem);
    }
    res.redirect("/");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});