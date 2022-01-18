import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog({ children, titleComponent, setOpen, open }) {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <div style={{ cursor: 'move', textAlign: 'center', background: '#e6e6e6', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingTop: '1rem' }} id="draggable-dialog-title">
                {{ ...titleComponent }}
            </div>
            {children}
        </Dialog>
    );
}
