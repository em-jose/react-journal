import { Box } from "@mui/material";
import { Navbar } from "@journal/components/";

const DRAWER_WIDTH: number = 240;

export const JournalLayout: React.FC<Props> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar drawerWidth={DRAWER_WIDTH} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};
