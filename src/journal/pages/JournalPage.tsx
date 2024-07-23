import { useDispatch } from "react-redux";
import { JournalLayout } from "@/journal/layout/JournalLayout";
import { NoteView, NothingSelectedView } from "@/journal/views/";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "@/store/journal/thunks";

export const JournalPage = () => {
    const dispatch = useDispatch();
    const onClickNewNote = () => {
        dispatch(startNewNote());
    };

    return (
        <>
            <JournalLayout>
                <NothingSelectedView />
                {/* <NoteView /> */}

                <IconButton
                    onClick={onClickNewNote}
                    size="large"
                    sx={{
                        color: "white",
                        backgroundColor: "error.main",
                        ":hover": {
                            backgroundColor: "error.main",
                            opacity: 0.9,
                        },
                        position: "fixed",
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <AddOutlined sx={{ fontSize: 30 }} />
                </IconButton>
            </JournalLayout>
        </>
    );
};
