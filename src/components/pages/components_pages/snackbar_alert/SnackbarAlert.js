import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import "./SnackbarStyle.css";

function SnackbarAlert({text, severity}) {

    const [alert, isAlert] = useState(true);

    return (
        <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={() => isAlert(!alert)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <Alert variant="filled" severity={severity} className="snackbarAlert" action={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => isAlert(!alert)}
                    sx={{ color: "#fff" }}
                >
                    <MdClose />
                </IconButton>
            }>
                {text}
            </Alert>

        </Snackbar>
    );
}

export default SnackbarAlert;