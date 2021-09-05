const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();
const {createNewNote, validateNote} = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req,res) => {
    let results = notes;

    res.json(results);
});

router.post('/notes', (req,res) => {
    //set ID based on UUID number
    req.body.id = uuidv4();

    if(!validateNote(req.body)) {
        res.status(400).send('The note was not formatted properly.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes', (req,res) => {
    
});
module.exports = router;