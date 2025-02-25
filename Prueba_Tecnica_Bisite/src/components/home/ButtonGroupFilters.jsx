import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { themeWeb } from "../../themes/theme";

const filters = [
    { label: "Biodiversity", options: ["High", "Medium", "Low"] },
    { label: "Country", options: ["USA", "Spain", "Brazil", "Canada"] },
    { label: "Price", options: ["Low", "Medium", "High"] },
    { label: "Methodology", options: ["Certified", "Experimental", "Traditional"] },
    { label: "In Progress", options: ["Yes", "No", "Pending"] },
    { label: "All Projects", options: ["Active", "Completed", "Upcoming"] }
];

export const ButtonGroupFilters = () => {
    return (
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
            {filters.map((filter, index) => (
                <FormControl key={index} sx={{ minWidth: 150 }} size="small">
                    <InputLabel id={`${filter.label}-label`} sx={{ fontFamily: "Roboto", fontWeight: 400, fontSize: "18px", color: themeWeb.colors.text }}>{filter.label}</InputLabel>
                    <Select labelId={`${filter.label}-label`} id={filter.label} value="" sx={{ border: "1px solid #6C757D", borderRadius: "5px", padding: "none" }}>
                        {filter.options.map((option, idx) => (
                            <MenuItem key={idx} value={option.toLowerCase()}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ))}
        </Stack>
    );
};
