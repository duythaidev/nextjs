'use server'

import { revalidateTag } from "next/cache"


export const refetchTag = async (tag: string) => {
    revalidateTag(tag)
}

export async function addUserTodos(description: string, userId: number) {
    const res = await fetch(`http://localhost:8000/api/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, userId }),
    })
    const data = await res.json()
    refetchTag('todos')
    console.log(data)
    return data
}

export async function checkUserTodos(todoId: number, isChecked: boolean, userId: number) {
    const res = await fetch(`http://localhost:8000/api/todos`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoId, isChecked, userId }),
    })
    const data = await res.json()
    refetchTag('todos')
    console.log('action data: ', data)
    return data
}
export async function deleteUserTodos(todoId: number, userId: number) {
    const res = await fetch(`http://localhost:8000/api/todos`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todoId, userId }),
    })
    const data = await res.json()
    refetchTag('todos')
    console.log('action data: ', data)
    return data
}

