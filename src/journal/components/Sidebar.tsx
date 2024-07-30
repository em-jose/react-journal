import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Drawer,
    Toolbar,
    Typography,
    Divider,
    List,
    IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { SideBarItem } from "@/journal/components";
import { closeSidebar } from "@/store/ui";

export const Sidebar = ({ drawerWidth }: Sidebar) => {
    const dispatch = useDispatch();
    const { displayName } = useSelector((state) => state.auth);
    const { notes } = useSelector((state) => state.journal);

    const onCloseSidebar = () => {
        dispatch(closeSidebar());
    };

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {displayName}
                    </Typography>

                    <IconButton
                        color="inherit"
                        edge="start"
                        sx={{ ml: "auto" }}
                        onClick={onCloseSidebar}
                    >
                        <Close />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List>
                    {notes.map((note) => (
                        <SideBarItem key={note.id} {...note} />
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
