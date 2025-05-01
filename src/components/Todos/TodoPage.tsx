'use client'

import { useState } from 'react';
import Title from '@/components/Todos/Title';
import InputField from '@/components/Todos/InputField';
import TodosContainer from '@/components/Todos/TodosContainer';
import Popup from '@/components/Popup';
import { addUserTodos } from '@/app/todo/actions';

interface IProps {
    todoList: ITodo[] | [],
}
export default function TodoPage({ todoList }: IProps) {
    const [todos, setTodos] = useState<ITodo[] | []>(todoList)
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
            <div className='min-h-1/2 bg-dark-500 shadow-orange-300 shadow-2sm ring-1 ring-orange-300  bg-secondary flex flex-col items-center w-2/3 md:w-1/3 p-5 rounded-xl '>
                <Title title='Todo page' />
                <InputField todoDescription={todoDescription} onChange={setTodoDescription} onClick={handleAddTodo}></InputField>
                <TodosContainer todos={todos} handleCheck={handleCheck} handleDelete={handleDelete}></TodosContainer>
            </div>
            <Popup open={open} setOpen={setOpen} title='UwU plz input' ></Popup>
        </>
    );
}