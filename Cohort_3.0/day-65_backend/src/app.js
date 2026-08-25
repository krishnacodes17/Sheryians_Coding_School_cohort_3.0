const express = require("express")
const notesRouter = require("./routes/notes.route")

const app = express ()

app.use(express.json())


app.use("/notes",notesRouter)




module.exports = app