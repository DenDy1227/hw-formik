import * as notesActions from './action';

// CRUD 
const saveNoteAPI = note => {
    return fetch('http://localhost:9000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    }).then(res => res.json())
}; 

const getNoteAPI = () => {
    return fetch('http://localhost:9000/notes', {
        method: 'GET',
    }).then(res => res.json())
}; 

const deleteNoteAPI = id => {
    return fetch(`http://localhost:9000/notes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
};


// MIDDLEWARE asyn Action 
export const saveNote = text => dispatch => {
    
    const note = { }
    dispatch(saveNoteAPI(note))
    .then(data => dispatch(FETCH_NOTES_START))
    .catch(data => dispatch(FETCH_NOTES_FAILURE))
    
};

export const getNote = () => dispatch => {
     
    dispatch(getNoteAPI())
    .then(data => dispatch(ADD_NOTE_SUCCESS))
    .catch(data => dispatch(ADD_NOTE_FAILURE))
};


export const deleteNote = id => dispatch => {
    
     dispatch(deleteNoteAPI())
     .then(data => dispatch(DELETE_NOTE_SUCCESS))
     .catch(data => dispatch(DELETE_NOTE_FAILURE))
     
};