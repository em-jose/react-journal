import { Box } from "@mui/material";

const DRAWER_WIDTH: number = 240;

export const JournalLayout: React.FC<Props> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};
