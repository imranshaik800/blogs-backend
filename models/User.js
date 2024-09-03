const mongoose = require("mongoose")

const MongoSchema = new mongoose.Schema({
    Title:String,
    Description:String
})

const UserModel = mongoose.model("data",MongoSchema)

module.exports = UserModel