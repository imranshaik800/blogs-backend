const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const UserModel = require("./models/User")
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB is connected")
})
.catch((err)=>{
    console.log("Mongo is not connected",(err))
})

const app = express()
app.use(express.json())
app.use(cors())


app.post("/newblogs",(req,res)=>{
    UserModel.create(req.body)
    .then((result)=>{
        console.log(result)
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.get("/newblogs",(req,res)=>{
    UserModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})




app.get("/updateblog/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.put("/updateblog/:id", (req, res) => {
    const {id } = req.params 
    const data = req.body;
  
    UserModel.findByIdAndUpdate(id, data)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
});

app.get("/updateblogs/:id",(req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.put("/updateblogs/:id", (req, res) => {
    const {id } = req.params 
    const data = req.body;
  
    UserModel.findByIdAndUpdate(id, data)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
});


  

app.get("/",(req,res)=>{
    UserModel.find({})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
})


app.delete("/delete/:id",(req,res)=>{
    const {id} = req.params
    UserModel.findByIdAndDelete(id)
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})


app.listen(process.env.PORT,()=>{
    console.log("server is running")
})