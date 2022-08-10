import { useState, useEffect, Fragment } from "react";
import {
    Box,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Typography,
    Paper,
    TextField,
    Button,
} from "@mui/material";
import { Search, FilterList, ArrowForwardOutlined } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";

export const DelegateMg = () => {
    return (
        <>
            <Typography
                component="h1"
                variant="h4"
                sx={{
                    marginBottom: "1rem",
                    fontWeight: "600",
                }}
            >
                Delegate
            </Typography>
            <Paper
                sx={{
                    width: 1300,
                    height: 300,

                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                }}
            >
                <Box
                    sx={{
                        paddingTop: "5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TextField
                        sx={{
                            width: 350,
                            paddingRight: "2rem",
                        }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                    />
                    <Button sx={{ marginTop: "1rem" }} variant="outlined">
                        DELEGATE AS MANAGER
                    </Button>
                </Box>
                <Box
                    sx={{
                        paddingTop: "2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button sx={{ marginRight: "3rem" }} variant="outlined">
                        REVOKE CREDENTIALS
                    </Button>
                </Box>
            </Paper>
        </>
    );
};

export default DelegateMg;
