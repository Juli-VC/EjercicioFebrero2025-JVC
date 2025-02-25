import { Box, Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";
import CheckIcon from "../../assets/tickVector.png";
import GIcon from "../../assets/gVector.png";
import CertificateIcon from "../../assets/certificateVector.png";
import EIcon from "../../assets/eVector.png";
import SpainFlag from "../../assets/flagSpain.png";
import GreeceFlag from "../../assets/flagGreece.png";
import GermanyFlag from "../../assets/flagGermany.png";
import DenmarkFlag from "../../assets/flagDenmark.png";
import ItalyFlag from "../../assets/flagItaly.png";
import belgiumFlag from "../../assets/flagBelgium.png";
import { themeWeb } from "../../themes/theme";

const projects = [
    { photo: "photo1.png", year: 2021, tons: "195.122,74", country: SpainFlag, icons: [CheckIcon, GIcon] },
    { photo: "photo2.png", year: 2021, tons: "884,74", country: SpainFlag, icons: [CheckIcon, EIcon] },
    { photo: "photo3.png", year: 2021, tons: "562,05", country: GreeceFlag, icons: [CheckIcon, CertificateIcon] },
    { photo: "photo4.png", year: 2021, tons: "230.122,99", country: GermanyFlag, icons: [CheckIcon, EIcon] },
    { photo: "photo5.png", year: 2022, tons: "5.122,11", country: DenmarkFlag, icons: [GIcon] },
    { photo: "photo6.png", year: 2022, tons: "80,74", country: ItalyFlag, icons: [CheckIcon, GIcon] },
    { photo: "photo7.png", year: 2022, tons: "336.005", country: belgiumFlag, icons: [] },
    { photo: "photo8.png", year: 2022, tons: "55.014,50", country: ItalyFlag, icons: [] }
];

export const Cards = () => {
    return (
        <Stack direction="row" flexWrap="wrap" gap={5} justifyContent="space-evenly">
            {projects.map((project, index) => (
                <Card key={index}
                    sx={{
                        width: 295,
                        color: themeWeb.colors.text,
                        border: `1px solid ${themeWeb.colors.grey}`,
                        borderRadius: "5px",
                        bgcolor: themeWeb.colors.background
                    }}>
                    <CardMedia
                        component="img"
                        height="130"
                        width="268"
                        image={(`/${project.photo}`)}
                        alt="Project Image"
                    />
                    <CardContent sx={{ paddingTop: "10px" }}>
                        <Box display="flex" justifyContent="space-between" alignItems="start">
                            {/* Columna 1: Bandera + Año */}
                            <Box display="flex" alignItems="center" gap={1}>
                                <img src={project.country} alt="Country Flag" height={15} width={18} />
                                <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, color: themeWeb.colors.text }}>{project.year}</Typography>
                            </Box>
                            {/* Columna 2: Toneladas */}
                            <Stack textAlign={"end"}>
                                <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, color: themeWeb.colors.grey }}>Available Tons</Typography>
                                <Typography sx={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: 400, color: themeWeb.colors.grey }}>{project.tons}</Typography>
                            </Stack>
                        </Box>
                        {/* Nombre del Proyecto */}
                        <Typography mt={1} gutterBottom sx={{ fontWeight: 700, color: themeWeb.colors.secondary, textDecoration: "underline" }}>PROJECT NAME</Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Roboto" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin ac.
                        </Typography>
                        {/* Iconos */}
                        <Box display="flex" gap={1} mt={1}>
                            {project.icons.map((icon, idx) => (
                                <img key={idx} src={icon} alt="Project Icon" height={20} width={20} />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
};
