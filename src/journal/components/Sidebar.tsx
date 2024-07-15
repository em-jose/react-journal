import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Drawer,
    Toolbar,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    Grid,
    ListItemText,
} from "@mui/material";

export const Sidebar = ({ drawerWidth }: Sidebar) => {
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
                        Mochi Cacahuete
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                    ].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText
                                        secondary={
                                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
                                        }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
