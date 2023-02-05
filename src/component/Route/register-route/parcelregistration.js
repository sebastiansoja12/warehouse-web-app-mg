import React, {useState} from "react";

import {makeStyles} from '@material-ui/core/styles';

import {
    Button,
    createMuiTheme,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Box from "@mui/material/Box";
import {Snackbar} from "@mui/material";

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

const theme = createMuiTheme();

const ParcelsTable = () => {
    const [parcels, setParcels] = useState([]);
    const [code, setCode] = useState('');
    const [open, setOpen] = useState(false);
    let [message, setMessage] = useState("");
    const classes = useStyles();
    const [setParcelExists] = useState(null);



    const handleSubmit = (event) => {
        event.preventDefault();
        if (!/^\d+$/.test(code)) {
            setMessage("Parcel code must be numeric and not empty!");
            setOpen(true);
            return;
        }
        setParcels([...parcels, code]);
        setCode('');
        setMessage('');
    };

    const handleDelete = (index) => {
        setParcels(parcels.filter((parcel, i) => i !== index));
    };

    const handleGenerateLabel = async (id) => {
        const endpoint = `${process.env.REACT_APP_SERVER_URL}/qrcodes/${id}/label`;
        const response = await fetch(endpoint);
        try {
            if (response.ok) {
                window.location.assign(endpoint);
                setParcelExists(true);
            } else {
                const message = await response.json();
                setOpen(true);
                setMessage("Error: " + message.error);
            }
        } catch (error) {
            const message = await response.json();
            setOpen(true);
            setMessage("Error: " + message.error);
        }
    };

    const handleGenerateCSV = async (id) => {
        const endpoint = `${process.env.REACT_APP_SERVER_URL}/csv/${id}`;
        const response = await fetch(endpoint);
        try {
            if (response.ok) {
                window.location.assign(endpoint);
                setParcelExists(true);
            } else {
                const message = await response.json();
                setOpen(true);
                setMessage("Error: " + message.error);
            }
        } catch (error) {
            const message = await response.json();
            setOpen(true);
            setMessage("Error: " + message.error);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        setMessage("")
    };

    return (
        <ThemeProvider theme={theme}>
            <Box display="flex" justifyContent="center"
                 sx={{
                     marginTop: 8,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                 }}
            >
            <TableContainer component={Paper} style={{ width: '50%' }}>
                <Toolbar>
                    <Typography variant="h6">
                        Register parcel
                    </Typography>
                </Toolbar>
                <form onSubmit={handleSubmit}>
                <Box display="centre">
                    <TextField
                        label="Parcel Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        margin="normal"
                    />
                    <Button type="submit">Add Parcel</Button>
                </Box>
                </form>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Parcel Code</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {parcels.map((parcel, index) => (
                            <TableRow key={index}>
                                <TableCell>{parcel}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleGenerateLabel(parcel)}>Label</Button>
                                    <Button onClick={() => handleGenerateCSV(parcel)}>CSV</Button>
                                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            Close
                        </Button>
                    </React.Fragment>
                }
            />
        </ThemeProvider>
    );
};

export default ParcelsTable;
