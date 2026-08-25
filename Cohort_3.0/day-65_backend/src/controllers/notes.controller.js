const { default: mongoose } = require("mongoose")
const notesModel = require("../models/notes.model")

const createNotesController = async (req,res)=>{
    const  {title,description} = req.body

    let notes = await notesModel.create({
        title:title,
        description:description
    })

    res.status(201).json({
        message:"notes is created ",
        notes
    })
}

const getNotesController = async(req,res)=>{

    let allNotes = await notesModel.find()

    res.status(200).json({
        message:"all notes ",
        allNotes
    })
}

const getSingleNotescontroller= async (req,res)=>{
    const {id} = req.params
    console.log(id)

    let getData = await notesModel.findById(id)

    res.status(200).json({
        message:"single routes ",
        notes:getData
    })
}


const updateNoteController = async(req,res)=>{
    const {id} = req.params

    const updateNote =await notesModel.findByIdAndUpdate(id,req.body, {new:true})

    res.status(200).json({
        message:"updated successfully ",
        updateNote
    })

}

const updateNotescontrollerPut = async(req,res)=>{
    const {id} = req.params

    const updateNotes =await notesModel.findOneAndReplace({_id:id} , req.body ,{new:true})

    res.status(200).json({
        message:"update bro ",
        updateNotes
    })
}

const deleteNotesController = async (req,res)=>{
    const {id} = req.params 

    let deleteNotes =await notesModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"note deleted "
    })

}




module.exports={
    createNotesController,
    getNotesController,
    getSingleNotescontroller,
    updateNoteController,
    updateNotescontrollerPut,
    deleteNotesController

}