import { Suspense } from "react"
import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </div >
    );
}