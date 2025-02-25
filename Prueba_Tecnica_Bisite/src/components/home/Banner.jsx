import { Box, Typography } from "@mui/material"
import fogTrees from "../../assets/fogTrees.jpg"
import { themeWeb } from "../../themes/theme"
export const Banner = () => {
    return (
        <Box
            sx={{
                height: "130px",
                width: "100%",
                position: "relative",
                overflow: "hidden", display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
            }}
        >
            {/* Imagen de fondo con tamaño ajustado */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${fogTrees})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center -220px",
                    backgroundRepeat: "no-repeat",
                    opacity: 1,
                    zIndex: 1,
                }}
            />

            {/* Capa semitransparente para mejorar la visibilidad del texto */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: themeWeb.colors.primary,
                    opacity: 0.5,
                    zIndex: 2,
                }}
            />

            {/* Contenido del banner */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 3,
                    padding: "0 80px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    height: "100%",
                }}
            >
                <Typography variant="h4" sx={{ color: themeWeb.colors.white, fontWeight: "700" }}>
                    YOUR CARBON CREDITS MARKETPLACE.
                </Typography>
                <Typography variant="h5" sx={{ color: themeWeb.colors.white }}>
                    SUPPORT OUR PROJECTS. REDUCE YOUR CARBON FOOTPRINT.
                </Typography>
            </Box>
        </Box>


    )
}
