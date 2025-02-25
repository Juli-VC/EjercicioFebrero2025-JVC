import { Box, } from "@mui/material"
import { Banner } from "../components/home/Banner"
import { SatelliteMonitoring } from "../components/projects/SatelliteMonitoring"

import { ButtonNewProject } from "../components/home/ButtonNewProject"
import { ButtonGroupFilters } from "../components/home/ButtonGroupFilters"
import { Cards } from "../components/home/Cards"


export const Home = () => {
    return (
        <Box >
            <Banner />
            <Box sx={{ padding: "40px 10%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px" }}>
                {/* 2 Buttos. Satellite & new project */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <SatelliteMonitoring />
                    <ButtonNewProject />
                </Box>
                {/* Filter selects group */}
                <Box alignSelf={"end"} >
                    <ButtonGroupFilters />
                </Box>
                <Box >
                    <Cards />
                </Box>
            </Box>
        </Box>
    )
}
