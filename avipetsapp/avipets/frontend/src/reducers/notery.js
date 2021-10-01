import {  
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
} from "../actions/types";

export const notes = (notes = [], action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return action.payload;
        case ADD_NOTE:
            // Copy pages
            let new_notes = [...notes];
            // Append to notes
            new_notes = [...notes, action.payload];
            return new_notes;
        case UPDATE_NOTE:
            const index = notes.findIndex((x) => x.id === action.payload.id);
            // Copy motes
            new_notes = [...notes];
            // Change note name
             new_notes[index].name = action.payload.name;
            return new_notes;
        case DELETE_NOTE:
            new_notes = notes.filter((note) => note.id !== action.payload);
            return new_notes;
        default:
            return notes;
  }
};