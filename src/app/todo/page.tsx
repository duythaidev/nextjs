'use client'

import { useState } from 'react';
import Title from '@/components/Todos/Title';
import InputField from '@/components/Todos/InputField';
import TodosContainer from '@/components/Todos/TodosContainer';
import Popup from '@/components/Popup';

const data: ITodo[] = [
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
    const [todos, setTodos] = useState<ITodo[]>(data)
    const [todoDescription, setTodoDescription] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false);

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

    const handleCheck = (id: number) => {
        const newData = todos.map((e) => e.id === id ? { ...e, isChecked: !e.isChecked } : e)
        setTodos(newData)
    }

    const handleDelete = (id: number) => {
        const newData = todos.filter(e => e.id !== id)
        setTodos(newData)
    }

    return (
        <>
            <div className='min-h-1/2 bg-amber-500 dark:bg-amber-300 bg-secondary flex flex-col items-center w-2/3 md:w-1/3 p-5 rounded-xl '>
                <Title title='Todo page' />
                <InputField todoDescription={todoDescription} onChange={setTodoDescription} onClick={addTodo}></InputField>
                <TodosContainer todos={todos} handleCheck={handleCheck} handleDelete={handleDelete}></TodosContainer>
            </div>
            <Popup open={open} setOpen={setOpen} title='UwU plz input' ></Popup>
        </>
    );
}