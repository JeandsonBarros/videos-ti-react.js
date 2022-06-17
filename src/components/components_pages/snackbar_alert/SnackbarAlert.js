import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import { MdClose } from 'react-icons/md';
import Alert from '@mui/material/Alert';
import "./SnackbarStyle.css";

function SnackbarAlert({text, severity, visible, setVisuble}) {


    return (
        <Snackbar
            open={visible}
            autoHideDuration={6000}
            onClose={() => setVisuble(!visible)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <Alert variant="filled" severity={severity} className="snackbarAlert" action={
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setVisuble(!visible)}
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