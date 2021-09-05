const exp = require('constants');
const fs = require('fs');

const {notes} = require('../db/db.json');

const {
    createNewNote,
    validateNote,
    findById,
    deleteObject
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

test("finds by id", () => {
    const startingNotes = [
        {
            id: "pf98",
            title: "Something Stupid",
            text: "Remeber to do something stupid today",
        },
        {
            id: "prgt24",
            title: "Another Note",
            text: "Some text goes here.",
        }
    ];
      
        const result = findById("pf98", startingNotes);
        const result2 = findById("prgt24", startingNotes);
        expect(result.title).toBe("Something Stupid");
        expect(result2.title).toBe("Another Note");
        expect(result.text).toBe("Remeber to do something stupid today");
      });
     
      test("deletes object by id", () => {
        const startingNotes = [
            {
                id: "pf98",
                title: "Something Stupid",
                text: "Remeber to do something stupid today",
            },
            {
                id: "prgt24",
                title: "Another Note",
                text: "Some text goes here.",
            },
            {
                id: "prgt25",
                title: "Another Note 2",
                text: "Some different text goes here.",
            }
        ];
          
            const result = deleteObject( 1, startingNotes);
            expect(result[0].title).toBe("Something Stupid");
            expect(result[1].title).toBe("Another Note 2");
            
          });
         
          