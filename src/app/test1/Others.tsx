'use client'
import { Button } from "@mui/material";
import { testingFunc } from "./actions";
import Link from "next/link";
interface IProps {
    data: string,
}
const Others = ({ data }: IProps) => {
    return (
        <div className="mt-52">
            <h1>Test 1</h1>
            <p>awawa</p>
            <Button variant="outlined" onClick={testingFunc}>asjdhads</Button>
            <Link href="/test2">Go to Test2</Link>
            <p>{JSON.stringify(data)}</p>
            <div>
            </div>
        </div>
    );
}

export default Others;