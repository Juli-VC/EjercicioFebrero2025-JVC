import { Link } from "react-router-dom";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";

export const Appbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ textAlign: 'left' }}>
                    My App
                </Typography>
                <div style={{ flexGrow: 1, textAlign: 'center', justifyContent: 'center' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/Projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/Regulations">Regulations</Button>
                    <Button color="inherit" component={Link} to="/Credits">Credits</Button>
                </div>
                <IconButton color="inherit">
                    <PublicIcon />
                </IconButton>
                <IconButton color="inherit">
                    <NotificationsIcon />
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
        </AppBar >
    )
}
