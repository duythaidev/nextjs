"use client";
import { Close } from "@mui/icons-material";
import { IconButton, Snackbar, SnackbarCloseReason } from "@mui/material";
import { SyntheticEvent } from "react";

interface IProps {
    setOpen: (open: boolean) => void,
    open: boolean,
    title:string
}

const Popup = ({ open, setOpen,title }: IProps) => {

    const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason,) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <IconButton size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}>
            <Close fontSize="small" />
        </IconButton>
    );

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message={title}
                action={action}
            />
        </>
    );
}

export default Popup;