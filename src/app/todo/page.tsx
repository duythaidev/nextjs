import TodoPage from "@/components/Todos/TodoPage";

export default async function Page() {
    const res = await fetch(`http://localhost:8000/api/todos`, {
        cache: 'force-cache',
        headers: {
            userId: `${1}`
        },
        next: { tags: ['todos'] }
    })
    const todos: ITodo[] = await res.json()

    return (
        <>
            <TodoPage todoList={todos}></TodoPage>
        </>
    )
}