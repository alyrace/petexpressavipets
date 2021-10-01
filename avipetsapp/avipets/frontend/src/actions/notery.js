import axios from "axios";
import { setAlert } from "./alert";
import {
  FETCH_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SELECT_NOTE,

} from "./types";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export const fetch_notes = (user_id) => async (dispatch) => {
  const response = await axios.get("/api/notery/");

  const notes = [];

  // Only get the notes for the current user
  response.data.forEach((note) => {
    if (note.creator === user_id) {
      notes.push(note);
    }
  });

  dispatch({ type: FETCH_NOTES, payload: notes });
};

// Select note
export const select_note = (page_id) => 
    async (dispatch) => {
        let payload = null
        try {
            const response = await axios.get(`/api/notery/${page_id}`)
            payload = response
        } catch (err) {
            const response = "Note not found"
            payload = response
        };
        dispatch({ type: SELECT_NOTE , payload: payload });
    };
