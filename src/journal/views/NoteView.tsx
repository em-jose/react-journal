import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { ImageGallery } from "@journal/components/ImageGallery";
import { useForm } from "@/hooks/useForm";
import { setActiveNote, startSavingNote } from "@/store/journal";

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector((state) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    const onSaveNote = () => {
        dispatch(startSavingNote());
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ p: 2 }} onClick={onSaveNote}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    sx={{ border: "none", mb: 1 }}
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    );
};
