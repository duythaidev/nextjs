import { Suspense } from "react";
import Others from "./Others";
export const dynamic = 'force-static';

export default async function Page() {
    const res = await fetch('http://localhost:8000/api/todos', {
        headers: {
            userId: `${1}`
        },
        cache: 'force-cache',
    })

    const data = await res.json()

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Others data={data}></Others>
        </Suspense>
    );
}
