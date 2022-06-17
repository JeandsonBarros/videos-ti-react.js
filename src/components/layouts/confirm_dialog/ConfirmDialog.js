
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ConfirmDialog({open, handleClose, action, title, text, btnText}) {

    function executeAction(){
        action()
        handleClose(false)
    }

    return (
        <Dialog
            open={open}
            onClose={()=>handleClose(false)}
        >
            <DialogTitle >
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText >
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>handleClose(false)}>Cancelar</Button>
                <Button color="warning" onClick={()=>executeAction()} autoFocus>
                    {btnText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;