import { Box, Button, Typography } from "@mui/material"
import { BigCard } from "../components/home/BigCard"
import { themeWeb } from "../themes/theme"
import Grid from '@mui/material/Grid2';
import iconSatellite from '../assets/sattelite-sYRI4arYNs.png'
import Carousel from "../components/home/CarouselGallery"
import TableData from "../components/home/TableData"
import { Benefits } from "../components/home/Benefits"
import { Documents } from "../components/home/Documents"
import { Verifications } from "../components/home/Verifications"
import { Tags } from "../components/home/Tags"
import { ThreeCards } from "../components/home/ThreeCards";

export const Home = () => {
    return (
        <>
            <BigCard />

            <Box sx={{ padding: "20px 200px" }}>

                {/* 3 cards */}
                <ThreeCards />

                {/* Main Section */}
                <Grid container spacing={10} px={5} my={6}>
                    {/* Left Column Section. 1-Photos 2-Text 3-Table */}
                    <Grid size={{ xs: 12, lg: 9 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", gap: "30px" }}>
                            {/* Satellite monitoring + Icon */}
                            <Box>
                                <Button variant="outlined" sx={{ borderColor: themeWeb.colors.primary, color: themeWeb.colors.primary, borderWidth: "2px" }}>
                                    <Typography>SATELLITE MONITORING</Typography>
                                    <img alt="satellite monitoring" src={iconSatellite} />
                                </Button>
                            </Box>
                            {/* 2 photos -> x4 gallery */}
                            <Box>
                                <Carousel />
                            </Box>
                            {/* Main Text */}
                            <Typography sx={{ textAlign: "justify" }}>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </Typography>
                            {/* Tabla data */}
                            <Box >
                                <TableData />
                            </Box>
                            {/* Benefits section */}
                            <Box >
                                <Benefits />
                            </Box>
                            {/* Documents */}
                            <Box >
                                <Documents />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column Section. Verification and Tags */}
                    <Grid size={{ xs: 12, lg: 3 }} >
                        {/* Verification */}
                        <Box>
                            <Verifications />
                        </Box>
                        {/* Tags */}
                        <Box >
                            <Tags />
                        </Box>
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}
