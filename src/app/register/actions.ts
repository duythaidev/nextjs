'use server'

export async function register(prevState: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const res = await fetch('http://localhost:8000/api/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...rawFormData }),
    })
    const data: IData = await res.json()
    // console.log(data)
    return { ...data }

}