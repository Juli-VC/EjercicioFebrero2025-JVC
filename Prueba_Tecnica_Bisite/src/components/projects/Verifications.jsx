import { Box, Stack, Typography } from '@mui/material'
import iconVerification from '../../assets/biodiversity_stamp 1.png'
import { themeWeb } from '../../themes/theme'
export const Verifications = () => {
    return (
        <Stack>
            <Box>
                <Typography variant='h4' sx={{ color: themeWeb.colors.secondary }} gutterBottom>Verifications</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 10px" }}>
                <img alt='Verification Certified sigil' src={iconVerification} height={171} width={208} />
            </Box>
        </Stack>
    )
}
