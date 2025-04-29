'use client'

import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { CheckCircle, Close, Delete, RadioButtonUnchecked } from '@mui/icons-material';
import { SyntheticEvent, useState } from 'react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

interface ITodos {
    id: number,
    description: string,
    isChecked: boolean
}

const data: ITodos[] = [
    {
        id: 1,
        description: 'a',
        isChecked: false,
    },
    {
        id: 2,
        description: 'b',
        isChecked: false,
    },

]

export default function CustomizedInputBase() {
    const [todos, setTodos] = useState<ITodos[]>(data)
    const [todoDescription, setTodoDescription] = useState<string>('')
    const [open, setOpen] = useState(false);

    const addTodo = () => {
        if (todoDescription.length !== 0) {
            const newData = [...todos, {
                id: todos.length + 1,
                description: todoDescription,
                isChecked: false,
            }]
            setTodos(newData)
            setTodoDescription('')
        }
        else {
            setOpen(true);
        }
    }
    const handleClose = (
        event: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCheck = (id: number) => {
        const newData = todos.map((e) =>
            e.id === id ? { ...e, isChecked: !e.isChecked } : e
        )
        setTodos(newData)
    }

    const handleDelete = (id: number) => {
        const newData = todos.filter(e => e.id !== id)
        setTodos(newData)
    }
    const action = (
        <>

            <IconButton size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    );
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='min-h-1/2 dark:bg-white bg-secondary flex flex-col items-center w-2/3 md:w-1/3 p-5 rounded-xl '>
                <Typography variant='h5' className='w-full'><CalendarMonthIcon fontSize={'large'} className='mr-2' />To-do List</Typography>
                <TextField className='w-full mx-auto !mt-5'
                    onChange={(e) => setTodoDescription(e.target.value)}
                    value={todoDescription}
                    variant="standard"
                    autoComplete='true'
                    slotProps={{
                        root: {
                            sx: {
                                borderRadius: '35px',
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
                                    <Button onClick={addTodo} sx={{ borderRadius: '10px', padding: 'calc(5px + 0.390625vw)', backgroundColor: '#000' }} >Add</Button>
                                </InputAdornment>
                        },
                    }} />
                <Box marginTop={'20px'} width={'100%'}>
                    {todos.map((element, index) => {
                        return (
                            <Box display={'flex'} alignItems={'center'} key={element.id}>
                                <IconButton color="primary" onClick={() => handleCheck(element.id)}>
                                    {element.isChecked ? <CheckCircle /> : <RadioButtonUnchecked />}
                                </IconButton>
                                <Typography sx={{ textDecorationLine: element.isChecked ? 'line-through' : 'initial' }} flex={1}>{element.description}</Typography>
                                <IconButton color="primary" onClick={() => handleDelete(element.id)}>
                                    <Delete />
                                </IconButton>

                            </Box>
                        )
                    })}
                </Box>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="UwU plz input"
                action={action}
            />
        </div>
    );
}