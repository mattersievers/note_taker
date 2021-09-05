const exp = require('constants');
const fs = require('fs');

const {notes} = require('../db/db.json');

const {
    createNewNote,
    validateNote
} = require("../lib/notes");

jest.mock('fs');

test("note object created", () => {
    const note = createNewNote (
        {tite:"Note Example", text:"Example Text"},
        notes
    );

    expect(note.tite).toBe("Note Example");
    expect(note.text).toBe("Example Text");
});

test("validates note properties", () => {
    const note = {title:"Note Example", text:"Example Text"};
    const badNote = {title:"Note Example"};


    const result= validateNote(note);
    const result2 = validateNote(badNote);
    
    expect(result).toBe(true);
    expect(result2).toBe(false);
});

