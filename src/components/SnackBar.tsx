import React, {  useState } from "react";

import { Button, IconButton, Snackbar, SnackbarCloseReason } from "@mui/material";
import { Close } from "@mui/icons-material";

export const withSnackbar = (WrappedComponent: any) => {
    return (props: any) => {
        const [open, setOpen] = useState(false);
        const showMessage = () => {
            setOpen(true);  
        };

        const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason,) => {
            if (reason === "clickaway") {
                return;
            }
            setOpen(false);
        };
        const action = (
            <>
                <Button color="secondary" size="small" onClick={handleClose}>
                    UNDO
                </Button>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                >
                    <Close fontSize="small" />
                </IconButton>
            </>
        );
        return (
            <>
                <WrappedComponent {...props} snackbarShowMessage={showMessage} />
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />
            </>
        );
    };
};
