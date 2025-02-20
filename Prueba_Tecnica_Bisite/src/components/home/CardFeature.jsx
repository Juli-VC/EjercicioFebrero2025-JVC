import Card from '@mui/material/Card';
import { themeWeb } from '../../themes/theme.js'


export default function CardFeature({ cardContent, sx }) {

    return (
        <Card
            sx={{
                minHeight: 100,
                maxHeight: 200,
                minWidth: 400,
                maxWidth: 500,
                borderRadius: "5px",
                border: `3px solid ${themeWeb.colors.primary}`,
                margin: "5px 0",
                padding: "10px",
                bgcolor: themeWeb.colors.primary,
                color: themeWeb.colors.white,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                ...sx,
            }}>{cardContent ? cardContent : ""}
        </Card>

    );
}
