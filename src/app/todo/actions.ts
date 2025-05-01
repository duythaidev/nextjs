'use server'

import { revalidateTag } from "next/cache"

export async function addUserTodos(description: string, userId: number) {

    const res = await fetch(`http://localhost:8000/api/todos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, userId }),
    })

    const data = await res.json()
    revalidateTag('todos')
    console.log(data)
    return data ?? []
}

