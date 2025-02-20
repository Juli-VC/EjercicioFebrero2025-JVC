import { useState } from "react";
import { Box, IconButton, Radio, useMediaQuery } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { themeWeb } from "../../themes/theme";

// Importar imágenes desde assets
import image1 from "../../assets/photo1.png";
import image2 from "../../assets/photo2.png";
import image3 from "../../assets/photo3.png";
import image4 from "../../assets/photo4.png";
import image5 from "../../assets/photo5.png";
import image6 from "../../assets/photo6.png";
import image7 from "../../assets/photo7.png";
import image8 from "../../assets/photo8.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    // Usar useMediaQuery para saber el tamaño de la pantalla
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    // Definir el número de imágenes por slide según el tamaño de pantalla
    const imagesPerSlide = isSmallScreen ? 1 : 2; // 1 imagen para "sm", 2 para "md" y superior

    const totalPages = Math.ceil(totalImages / imagesPerSlide);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + imagesPerSlide) % totalImages);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - imagesPerSlide + totalImages) % totalImages);
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                paddingBottom: "40px",
                overflow: "hidden",
            }}
        >
            {/* Flechas de navegación */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "5px",
                    transform: "translateY(-50%)",
                    color: themeWeb.colors.primary,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
                }}
            >
                <ArrowBackIos sx={{ marginLeft: "6px" }} />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "5px",
                    transform: "translateY(-50%)",
                    color: themeWeb.colors.primary,
                    backgroundColor: "rgba(255,255,255,0.7)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
                }}
            >
                <ArrowForwardIos />
            </IconButton>

            {/* Contenedor de imágenes */}
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                transition: "transform 0.5s ease-in-out",
            }}>
                {Array.from({ length: imagesPerSlide }).map((_, i) => {
                    const index = (currentIndex + i) % totalImages;
                    return (
                        <Box
                            key={index}
                            component="img"
                            src={images[index]}
                            alt={`Slide ${index}`}
                            sx={{
                                width: "48%",
                                height: "300px",
                                objectFit: "cover",
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        />);
                })}
            </Box>

            {/* Indicators Radio-Circle */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "5px",
                }}
            >
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Radio
                        key={index}
                        checked={Math.floor(currentIndex / imagesPerSlide) === index}
                        onChange={() => setCurrentIndex(index * imagesPerSlide)}
                        sx={{
                            padding: 0,
                            color: themeWeb.colors.primary,
                            "&.Mui-checked": { color: themeWeb.colors.primary },
                        }}
                        size="small"
                    />
                ))}
            </Box>
        </Box>
    );
}
