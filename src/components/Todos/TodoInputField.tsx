"use client";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Popup from "../Popup";
import { addUserTodos } from "@/app/todo/actions";


const TodoInputField = () => {
    const [todoDescription, setTodoDescription] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false);

    const handleAddTodo = async () => {
        if (todoDescription.length !== 0) {
            const data = await addUserTodos(todoDescription, 1)
        }
        else {
            setOpen(true);
        }
    }

    return (
        <>
            <TextField className='w-full mx-auto !mt-5'
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
                variant="standard"
                autoComplete='true'
                slotProps={{
                    root: { sx: { borderRadius: '35px', backgroundColor: "#fff" } }, input: {
                        style: { color: '#000', padding: '10px', fontSize: 'calc(15px + 0.390625vw)' }, disableUnderline: true,
                        endAdornment:
                            <InputAdornment position="start">
                                <Button type="submit" onClick={handleAddTodo} sx={{ borderRadius: '10px', padding: 'calc(5px + 0.390625vw)', backgroundColor: '#000' }}>
                                    Add
                                </Button>
                            </InputAdornment>
                    }
                }}>
            </TextField>
            <Popup open={open} setOpen={setOpen} title='UwU plz input' ></Popup>

        </>
    );
}

export default TodoInputField;