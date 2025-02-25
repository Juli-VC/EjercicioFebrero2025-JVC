import { Box, Button, Stack, Typography } from "@mui/material"
import { themeWeb } from "../../themes/theme"

export const Tags = () => {
    const buttonNames = ["Started - 2021", "45 Collabs", "Audit Agency - Verra", "Parcels of 1000 m2"];
    return (
        <Stack>
            <Typography variant="h4" sx={{ color: themeWeb.colors.secondary }} gutterBottom >Tags</Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {buttonNames.map((name, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        sx={{
                            color: themeWeb.colors.secondary,
                            border: `2px solid ${themeWeb.colors.secondary}`,
                            "&:hover": {
                                backgroundColor: themeWeb.colors.secondary,
                                color: "#fff",
                            },
                        }}
                    >
                        {name}
                    </Button>
                ))}
            </Box>
        </Stack>
    )
}
