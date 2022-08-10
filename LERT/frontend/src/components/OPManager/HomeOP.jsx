import { List, Typography, Button } from "@mui/material";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

import { getFirstName } from "../../utils/getFirstName";

export const HomeOP = () => {
    const { name } = useSelector((state) => state.auth);
    const firstName = getFirstName(name);

    return (
        <List>
            <Typography
                variant="h4"
                sx={{ marginBottom: "2rem", fontWeight: "600" }}
            >
                Hi, {firstName}!
            </Typography>
            <Typography
                variant="h3"
                sx={{ marginBottom: "8.5rem", fontWeight: "300" }}
            >
                Welcome to LERT <br /> Labor Expenses Recovery Tool
            </Typography>
            <Typography paragraph sx={{ fontSize: "25px" }}>
                As Operation Manager you´ll be able to perfom different actions
                <br />
                in each section.
            </Typography>
        </List>
    );
};

export default HomeOP;
