import { Link, useLocation } from "react-router-dom";
import { Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PublicIcon from "@mui/icons-material/Public";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import websiteLogo from "../../assets/autumn leaf.png";
import { themeWeb } from "../../themes/theme";

const links = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/Projects" },
    { name: "Regulations", to: "/Regulations" },
    { name: "Credits", to: "/Credits" }
];

export const Appbar = () => {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black', height: "78px", justifyContent: "center" }}>
            <Toolbar>
                <Stack direction="row" alignItems="center">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ padding: "0", paddingLeft: "5px" }}>
                        <img alt="Website logo" src={websiteLogo} />
                    </IconButton>
                    <Typography sx={{
                        textAlign: 'left', fontFamily: 'Oswald, sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                    }}>
                        Bitise
                    </Typography>
                </Stack>

                <div style={{ flexGrow: 1, textAlign: 'center', justifyContent: 'center', fontWeight: "700" }}>
                    {links.map(link => (
                        <Button
                            key={link.to}
                            component={Link}
                            to={link.to}
                            sx={{
                                fontFamily: 'Oswald, sans-serif',
                                fontWeight: 700,
                                fontSize: '24px',
                                color: location.pathname === link.to ? themeWeb.colors.primary : "inherit",
                                "&:hover": {
                                    color: location.pathname !== link.to && themeWeb.colors.secondary
                                }
                            }}
                        >
                            {link.name}
                        </Button>
                    ))}
                </div>

                <IconButton color="inherit" sx={{
                    "&:hover": {
                        color: themeWeb.colors.secondary
                    }
                }} >
                    <PublicIcon sx={{ height: "35px", width: "35px" }} />
                </IconButton>
                <IconButton color="inherit" sx={{
                    "&:hover": {
                        color: themeWeb.colors.secondary
                    }
                }} >
                    <NotificationsIcon sx={{ height: "35px", width: "35px" }} />
                </IconButton>
                <IconButton color="inherit" sx={{
                    "&:hover": {
                        color: themeWeb.colors.secondary
                    }
                }} >
                    <AccountCircleIcon sx={{ height: "45px", width: "45px" }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
