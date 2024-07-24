import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "@journal/components/";

const DRAWER_WIDTH: number = 240;

export const JournalLayout: React.FC<Props> = ({ children }) => {
    return (
        <Box
            sx={{ display: "flex" }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Navbar drawerWidth={DRAWER_WIDTH} />
            <Sidebar drawerWidth={DRAWER_WIDTH} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
