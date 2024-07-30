import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Grid, Typography } from "@mui/material";
import { startLogout } from "@/store/auth";
import { toggleSidebar } from "@/store/ui";

export const Navbar = ({ drawerWidth = 240 }: Navbar) => {
    const dispatch = useDispatch();
    const { showSidebar } = useSelector((state) => state.ui);

    const onLogout = () => {
        dispatch(startLogout());
    };

    const onToggleSidebar = (toggleValue: boolean) => {
        dispatch(toggleSidebar(toggleValue));
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2 }}
                    onClick={() => onToggleSidebar(!showSidebar)}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6" noWrap component="div">
                        JournalApp
                    </Typography>
                    <IconButton color="error" onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
