import { Box, Divider, Link, Stack, Typography } from "@mui/material"
import { themeWeb } from "../../themes/theme"

export const Documents = () => {
    return (
        <Box >
            <Typography variant="h4" sx={{ color: themeWeb.colors.secondary }} gutterBottom >Documents</Typography>
            <Stack >
                <Typography variant="body1">
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography>PROJECT DETAILS: name_PDF.pdf</Typography>
                        <Link href="#pdf-download" sx={{ color: "primary.main" }}>
                            Download PDF
                        </Link>
                    </Box>
                    <Divider sx={{ my: 1, backgroundColor: "gray" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography>PROJECT DETAILS: name_PDF.pdf</Typography>
                        <Link href="#pdf-download" sx={{ color: "primary.main" }}>
                            Download PDF
                        </Link>
                    </Box>
                </Typography>
            </Stack>
        </Box>
    )
}
