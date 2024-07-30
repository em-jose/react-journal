import { useSelector } from "react-redux";
import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "@journal/components/";

export const JournalLayout: React.FC<Props> = ({ children }) => {
    const { showSidebar } = useSelector((state) => state.ui);
    const DRAWER_WIDTH: number = showSidebar ? 240 : 0;

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
