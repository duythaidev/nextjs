import Title from "@/components/Todos/Title";
import TodoInputField from "@/components/Todos/TodoInputField";
import TodosContainer from "@/components/Todos/TodosContainer";

export default async function Page() {
    let todos: ITodo[] = []
    try {
        const res = await fetch(`${process.env.API_URL}/api/todos`, {
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
        <div className='min-h-1/2 flex flex-col items-center w-2/3 p-2.5 lg:w-1/3 lg:p-5 rounded-xl bg-dark-500 bg-secondary shadow-orange-300 shadow-2sm ring-1 ring-orange-300'>
                <Title title='Todo page' />
                <TodoInputField/>
                <TodosContainer todos={todos}/>
        </div>
    )
}