import { Box, Typography } from "@mui/material"
import backgroundTrees from "../../assets/Frame 1000002760.png"
export const BigCard = () => {
    return (
        <Box sx={{
            height: "150px",
            backgroundImage: `url(${backgroundTrees})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            paddingLeft: "30px"
        }}>
            <Typography gutterBottom > ⬅ back to dashboard</Typography>
            <Typography variant="h3">Name Project</Typography>
        </Box>

    )
}
