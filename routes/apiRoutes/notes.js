const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();
const {createNewNote, validateNote, findById, deleteObject} = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req,res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req,res) => {
    //set ID based on UUID number
    req.body.id = uuidv4();

    //checks to see if note is in valid format and creates one if so
    if(!validateNote(req.body)) {
        res.status(400).send('The note was not formatted properly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req,res) => {
    //finds object in db.json
    let result = findById(req.params.id, notes);
    //finds index of the note object
    let currentIndex = notes.indexOf(result);
    deleteObject(currentIndex, notes);
    
    res.json(notes);
});

module.exports = router;