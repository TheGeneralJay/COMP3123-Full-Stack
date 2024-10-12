const express = require("express"); // Importing express to use router here.
const noteModel = require('../models/NotesModel.js');
const router = express.Router(); // Pulling in router.

// DONE - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    // DONE - Write your code here to save the note
    // If we get here, the note content should be fine. Continue.
    const note = new noteModel(req.body.content);

    try {
        // Save the note.
        await note.save();
        res.send(note);
    } catch (err) {
        // Error out if something goes wrong.
        res.status(500).send(err);
    }
});

//DONE - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/', async (req, res) => {
    //DONE - Write your code here to returns all notes.
    try {
        // Grab all notes and return them.
        const notes = await noteModel.find({});
        res.send(notes);
    } catch (err) {
        res.status(500).send(err);
    }
});

//DONE - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/:noteId', async (req, res) => {
    // Validate request
    if(!req.params.noteId) {
        return res.status(400).send({
            message: "Note ID does not exist."
        });
    }
    //DONE - Write your code here to return onlt one note using noteid
    try {
        // Grab note with passed ID and return it.
        const note = await noteModel.findById(req.params.noteId);
        res.send(note);
    } catch (err) {
        res.status(500).send(err);
    }

});

//DONE - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //DONE - Write your code here to update the note using noteid

    try {
        // Grab note to update.
        const note = await noteModel.findById(req.params.noteId);
        // Grab changes the user is requesting.
        const requestedChanges = req.body.content;
        // Grab the keys of the incoming JSON request.
        const changeKeys = Object.keys(requestedChanges);

        // Loop through the changeKeys variable.
        changeKeys.forEach(key => {
            // If individual key matches one of the keys in the schema, update the value.
            if (note[key]) {
                note[key] = requestedChanges[key];
            }
        });

        await note.save();
        res.status(200).send({
            "message": `Changes to note named ${note.noteTitle} have been saved successfully.`
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

//DONE - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/:noteId', async (req, res) => {
    //DONE - Write your code here to delete the note using noteid
    try {
        const id = await noteModel.findById(req.params.noteId);
        if (!id) {
            // If ID doesn't exist, error out.
            throw new Error();
        }
        await noteModel.deleteOne({ _id: id });
        res.status(200).send({
            "message": `Note deleted successfully.`
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;