import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Divider, } from "@mui/material";
import { themeWeb } from "../../themes/theme"; // Asumiendo que tu tema está aquí

const reforestationData = {
    status: "Certified",
    type: "Reforestation",
    methodology: "MH-457859",
    standard: "Gold Standard",
    auditAgency: "name",
    volume: "1000m²",
    duration: "3 years",
    risk: "Medium",
    proponet: "Name",
    country: "León, Spain",
    company: "Madroñal Plantaciones S.L",
    blockchain: "0xnferuj872bfnkso90"
};

const TableData = () => {
    return (
        <TableContainer component={Paper} sx={{ margin: "20px", padding: "20px" }}>
            <Table>
                <TableBody>
                    {/* First Row */}
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Type</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Methodology</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Standard</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{reforestationData.status}</TableCell>
                        <TableCell>{reforestationData.type}</TableCell>
                        <TableCell>{reforestationData.methodology}</TableCell>
                        <TableCell>{reforestationData.standard}</TableCell>
                    </TableRow>
                    <Divider sx={{ margin: "10px 0" }} /> {/* Divider between rows */}

                    {/* Second Row */}
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Audit Agency</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Volume</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Duration</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Risk</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{reforestationData.auditAgency}</TableCell>
                        <TableCell>{reforestationData.volume}</TableCell>
                        <TableCell>{reforestationData.duration}</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: reforestationData.risk == "Low" ? "green" : reforestationData.risk == "Medium" ? "orange" : "darkred" }}>{reforestationData.risk}</TableCell>
                    </TableRow>
                    <Divider sx={{ margin: "10px 0" }} />

                    {/* Third Row */}
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Proponet</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Country</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Company</TableCell>
                        <TableCell sx={{ fontWeight: "bold", color: themeWeb.colors.secondary }}>Blockchain ID</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{reforestationData.proponet}</TableCell>
                        <TableCell>{reforestationData.country}</TableCell>
                        <TableCell>{reforestationData.company}</TableCell>
                        <TableCell>{reforestationData.blockchain}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <Divider sx={{ margin: "10px 0" }} />
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableData;
