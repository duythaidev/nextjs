'use server'

import { revalidateTag } from "next/cache"

export const testingFunc = async () => {
    console.log('revalidate')
    revalidateTag('test')
}
