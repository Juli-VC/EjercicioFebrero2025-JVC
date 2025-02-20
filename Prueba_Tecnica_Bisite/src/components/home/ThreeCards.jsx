import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material'
import { themeWeb } from '../../themes/theme'
import CardFeature from "../../components/home/CardFeature"
import iconInfo from '../../assets/infoIcon.png'
import iconMonotoring from '../../assets/expoMonitoringIcon.png'
import iconCreditTimeline from '../../assets/carbonCycleIcon.png'

export const ThreeCards = () => {
    return (
        <Grid container spacing={10} px={5}>
            <Grid size={{ xs: 12, md: 4 }}>
                <CardFeature sx={{}} cardContent={
                    <>
                        <img alt="details info" src={iconInfo} />
                        <Typography sx={{ fontWeight: 900 }}>DETAILS INFO</Typography>
                    </>
                } />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <CardFeature sx={{ bgcolor: themeWeb.colors.white, color: themeWeb.colors.primary }} cardContent={
                    <>
                        <img alt="details info" src={iconMonotoring} />
                        <Typography sx={{ fontWeight: 900 }}>MONITORING DATA</Typography>
                    </>
                } />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <CardFeature sx={{ bgcolor: themeWeb.colors.white, color: themeWeb.colors.primary }} cardContent={
                    <>
                        <img alt="details info" src={iconCreditTimeline} />
                        <Typography sx={{ fontWeight: 900 }}>CREDIT TIMELINE</Typography>
                    </>
                } />
            </Grid>
        </Grid>
    )
}
