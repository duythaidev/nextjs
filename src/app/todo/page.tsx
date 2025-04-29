'use client'

import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface ITodos {
    id: number,
    description: string
}

const data: ITodos[] = [
    {
        id: 1,
        description: 'a'
    },
    {
        id: 2,
        description: 'b'
    },

]

export default function CustomizedInputBase() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='bg-gray-800 flex flex-col justify-center items-center w-1/2 p-5 rounded-xl'>
                <Typography variant='h5' className='w-1/2'><CalendarMonthIcon fontSize={'large'} className='mr-2' />To-do List</Typography>
                <TextField className='w-1/2 mx-auto !mt-5'
                    variant="standard"
                    autoComplete='true'
                    slotProps={{
                        root: {
                            sx: {
                                borderRadius: '30px',
                                backgroundColor: "#fff",
                            },
                        },
                        input: {
                            style: {
                                color: '#000',
                                padding: '10px',
                                fontSize: 'calc(15px + 0.390625vw)'
                            },
                            disableUnderline: true,
                            endAdornment:
                                <InputAdornment position="start">
                                    <Button sx={{ borderRadius: '10px', padding: '10px', backgroundColor: '#000' }} >Add</Button>
                                </InputAdornment>
                        },
                    }} />
                <Button variant="outlined" startIcon={<CalendarMonthIcon />}>
                    Delete
                </Button>
            </div>
        </div>
    );
}