import { Box, Button, Typography } from '@mui/material'
import { themeWeb } from '../../themes/theme'
import iconSatellite from '../../assets/sattelite-sYRI4arYNs.png'

export const SatelliteMonitoring = () => {
    return (
        <Box>
            <Button variant="outlined" sx={{
                height: "40px",
                borderColor: themeWeb.colors.primary,
                color: themeWeb.colors.primary,
                borderWidth: "2px",
                borderRadius: "10px",
                "&:hover": {
                    backgroundColor: themeWeb.colors.secondary,
                    color: "#fff", borderColor: "#fff",
                },
            }}>
                <Typography fontWeight={700} mr={2} fontSize={"18px"} fontFamily={"Roboto"}>SATELLITE MONITORING</Typography>
                <img alt="satellite monitoring" src={iconSatellite} />
            </Button>
        </Box>
    )
}
