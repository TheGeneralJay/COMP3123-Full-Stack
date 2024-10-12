const mongoose = require('mongoose');

// DONE - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({
    noteTitle : String,
    noteDescription : String,
    priority : ["LOW", "MEDIUM", "HIGH"],
    dateAdded : Date,
    dateUpdated : Date
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;