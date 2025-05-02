"use client";
import { checkUserTodos, deleteUserTodos } from "@/app/todo/actions";
import { CheckCircle, Delete, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Popup from "../Popup";
import { useState } from "react";

interface IProps {
    todos: ITodo[],
}

const TodosContainer = ({ todos }: IProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleCheck = async (todoId: number,isChecked :boolean) => {
        const res = await checkUserTodos(todoId,isChecked, 1)
        console.log('delete todo: ', res)
        if (res.EC === -1) {
            setOpen(true)
        }
    }

    const handleDelete = async (todoId: number) => {
        const res = await deleteUserTodos(todoId, 1)
        console.log('delete todo: ', res)
        if (res.EC === -1) {
            setOpen(true)
        }
    }
    return (
        <>
            <Box marginTop={'20px'} width={'100%'}>
                {todos && todos.length > 0 && todos.map((todo) => {
                    return (
                        <Box display={'flex'} alignItems={'center'} key={todo.id}>
                            <IconButton color="primary" onClick={() => handleCheck(todo.id,todo.isChecked)}>
                                {todo.isChecked ? <CheckCircle /> : <RadioButtonUnchecked />}
                            </IconButton>
                            <Typography sx={{ textDecorationLine: todo.isChecked ? 'line-through' : 'initial' }} flex={1}>{todo.description}</Typography>
                            <IconButton color="primary" onClick={() => handleDelete(todo.id)}>
                                <Delete />
                            </IconButton>
                        </Box>
                    )
                })}
            </Box>
            <Popup open={open} setOpen={setOpen} title='Cannot delete UwU' ></Popup>
        </>
    );
}

export default TodosContainer;