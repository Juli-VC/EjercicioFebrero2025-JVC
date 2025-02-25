import { Box, Typography } from "@mui/material"
import { themeWeb } from "../../themes/theme"

export const Benefits = () => {
    return (
        <Box >
            <Typography variant="h4" sx={{ color: themeWeb.colors.secondary }} gutterBottom >Benefits</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", color: themeWeb.colors.text }} >
                The reforestation project in Spain offers numerous benefits to the local ecosystem and community:
                <ol>
                    <li>
                        <strong>Sustainable Employment Opportunities:</strong> The project generates secure, long-term employment in rural and underdeveloped areas of Spain, providing economic stability and opportunities for local residents.
                    </li>
                    <li>
                        <strong>Fair Working Conditions:</strong> Workers benefit from fair working conditions, including accident and health insurance, pension coverage, personal protective equipment, and ongoing education and training, ensuring their well-being and professional development.
                    </li>
                    <li>
                        <strong>Conservation of Natural Habitats:</strong> A significant portion (25%) of the project area is designated as nature reserves, preserving remnant forests and wetlands as vital habitats and biological corridors for endangered wildlife species native to Spain.
                    </li>
                    <li>
                        <strong>Creation of Buffer Zones:</strong> The project promotes the establishment of mixed stands with a high proportion of native tree species, creating new habitats that serve as buffer zones between the project area and adjacent natural reserves, such as national parks, enhancing biodiversity conservation efforts.
                    </li>
                    <li>
                        <strong>Protection of Endangered Species:</strong> Species listed on the IUCN Red List of Threatened Species, including the Iberian Lynx (Lynx pardinus) and Spanish Imperial Eagle (Aquila adalberti), have been observed within the project area, highlighting the significance of the reforestation efforts in safeguarding vulnerable wildlife populations.
                    </li>
                    <li>
                        <strong>Biodiversity Monitoring:</strong> The project integrates biodiversity monitoring of amphibians and reptiles, providing valuable insights into habitat quality and land use compatibility, thus aiding in informed conservation decision-making.
                    </li>
                </ol>
            </Typography>
        </Box>
    )
}
