import { Box, Typography } from "@mui/material"
import { BigCard } from "../components/home/BigCard"


export const Home = () => {
    return (
        <>
            <BigCard />

            <Box sx={{ padding: "100px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ height: "150px", width: "300px", background: "#438C40", margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>ℹ</Typography>
                        <Typography>Details info</Typography>
                    </Box>
                    <Box sx={{ height: "150px", width: "300px", background: "#438C40", margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>🛠</Typography>
                        <Typography>Monotoring Data</Typography>
                    </Box>
                    <Box sx={{ height: "150px", width: "300px", background: "#438C40", margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography>🎫</Typography>
                        <Typography>Credit Timeline</Typography>
                    </Box>
                </Box>
                <Typography>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </Typography>
                <Box >
                    <img />
                </Box>
            </Box>
        </>
    )
}
