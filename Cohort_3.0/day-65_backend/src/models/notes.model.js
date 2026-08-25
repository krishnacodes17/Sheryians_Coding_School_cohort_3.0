const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true,
        minlength:[20,"minimum length 20 charecter is required "]
    }
})

const notesModel = mongoose.model("Notes", notesSchema)

module.exports = notesModel