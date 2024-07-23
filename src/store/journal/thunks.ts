import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "@/firebase/config";
import {
    addNewEmptyNote,
    setActiveNote,
    savingNewNote,
    setNotes,
} from "@/store/journal";
import { loadNotes } from "@/helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error("User UID does not exists");

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};
