const fs = require("fs");
const path = require("path");

//creates new note and pushes to notes array
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({notes: notesArray},null, 2)
    );
    return note;
};

//checks note object for correct properties
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string'){
        return false;
    }
    if(!note.text || typeof note.text !== 'string'){
        return  false;
    }
    return true;
};

//finds note object by id
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;

}

//erase by index from db.json
function deleteObject(index, notesArray){
    notesArray.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({notes: notesArray},null, 2)
    );
    return notesArray;
}

module.exports = {
    createNewNote,
    validateNote,
    findById,
    deleteObject
}