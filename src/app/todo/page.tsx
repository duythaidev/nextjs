import Title from "@/components/Todos/Title";
import TodoInputField from "@/components/Todos/TodoInputField";
import TodosContainer from "@/components/Todos/TodosContainer";

export default async function Page() {
    let todos: ITodo[] = []
    try {
        const res = await fetch(`http://localhost:8000/api/todos`, {
            cache: 'force-cache',
            headers: {
                userId: `${1}`
            },
            next: { tags: ['todos'] }
        })
        const data = await res.json()
        todos = data.DT
        // console.log(todos)
    } catch (error) {
        console.log(error)
    }
    return (
        <div className='min-h-1/2 bg-dark-500 shadow-orange-300 shadow-2sm ring-1 ring-orange-300  bg-secondary flex flex-col items-center w-2/3 md:w-1/3 p-5 rounded-xl '>
                <Title title='Todo page' />
                <TodoInputField></TodoInputField>
                <TodosContainer todos={todos}></TodosContainer>
        </div>
    )
}