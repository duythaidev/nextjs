import * as React from 'react';

import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CustomizedInputBase() {
    return (
        <div className='bg-white text-white w-full h-screen flex justify-center content-center'>
            <TextField id="filled-basic" label="Email" variant="filled" />
            <Button variant="outlined" startIcon={<CalendarMonthIcon />}>
                Delete
            </Button>
        </div>
    );
}