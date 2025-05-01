"use client"
import { CalendarMonth } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface IProps {
    title: string,
}

const Title = ({ title }: IProps) => {
    return (
        <Typography variant='h5' className='w-full'><CalendarMonth fontSize={'large'} className='mr-2' />
            {title}
        </Typography>
    );
}

export default Title;