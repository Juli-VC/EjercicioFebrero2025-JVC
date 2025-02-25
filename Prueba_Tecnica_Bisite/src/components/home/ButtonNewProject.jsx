import { Button } from "@mui/material"
import { themeWeb } from "../../themes/theme"


export const ButtonNewProject = () => {
    return (
        <Button variant="contained" sx={{
            bgcolor: themeWeb.colors.primary,
            height: "40px",
            fontSize: "18px",
            fontWeight: "700",
            borderRadius: "10px",
            padding: "26px",
            "&:hover": {
                backgroundColor: themeWeb.colors.secondary,
                color: "#fff",
            },
        }}>+ NEW PROJECT</Button>
    )
}
