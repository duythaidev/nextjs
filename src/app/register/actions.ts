import { redirect } from "next/navigation"

'use server'
export async function register(prevState: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const res = await fetch('http://localhost:8000/api/auth/register', {
        method: "POST",
        body: JSON.stringify({ rawFormData }),
    })
    const data = res.json()
    // if (!res.ok) {
    //     return { message: '' }
    // }

    console.log(data)
    // redirect('/login')

    return { message: 'Please enter a valid email' }

}