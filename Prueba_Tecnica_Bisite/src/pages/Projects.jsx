import { Box, Typography } from "@mui/material"
import { BigCard } from "../components/projects/BigCard"
import Grid from '@mui/material/Grid2';

import Carousel from "../components/projects/CarouselGallery"
import TableData from "../components/projects/TableData"
import { Benefits } from "../components/projects/Benefits"
import { Documents } from "../components/projects/Documents"
import { Verifications } from "../components/projects/Verifications"
import { Tags } from "../components/projects/Tags"
import { ThreeCards } from "../components/projects/ThreeCards";
import { SatelliteMonitoring } from "../components/projects/SatelliteMonitoring";

export const Projects = () => {
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
                            <SatelliteMonitoring />
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
