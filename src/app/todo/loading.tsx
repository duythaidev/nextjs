import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <div>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </div>
    );
}