const express = require("express")
const { createNotesController, getNotesController, getSingleNotescontroller, updateNoteController, updateNotescontrollerPut, deleteNotesController } = require("../controllers/notes.controller")

const router = express.Router()

router.post("/create", createNotesController)
router.get("/allNotes", getNotesController)
router.get("/note/:id", getSingleNotescontroller)
router.patch("/update/:id",updateNoteController)
router.put("/update/:id",updateNotescontrollerPut)
router.delete("/delete/:id",deleteNotesController)



module.exports = router