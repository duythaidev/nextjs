"use client";
import { CheckCircle, Delete, RadioButtonUnchecked } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

interface IProps {
    todos: ITodo[],
    handleCheck: (id: number) => void,
    handleDelete: (id: number) => void
}

const TodosContainer = ({ todos, handleCheck, handleDelete }: IProps) => {

    return (
        <Box marginTop={'20px'} width={'100%'}>
            {todos && todos.length > 0 && todos.map((element) => {
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
    );
}

export default TodosContainer;