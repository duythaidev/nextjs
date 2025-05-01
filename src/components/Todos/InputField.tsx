"use client";
import { Button, InputAdornment, TextField } from "@mui/material";

interface IProps {
    todoDescription: string,
    onChange: (value: string) => void,
    onClick: () => void
}

const InputField = ({ todoDescription, onChange, onClick }: IProps) => {
    return (
        <>
            <TextField className='w-full mx-auto !mt-5'
                value={todoDescription}
                onChange={(e) => onChange(e.target.value)}
                variant="standard"
                autoComplete='true'
                slotProps={{
                    root: { sx: { borderRadius: '35px', backgroundColor: "#fff" } }, input: {
                        style: { color: '#000', padding: '10px', fontSize: 'calc(15px + 0.390625vw)' }, disableUnderline: true,
                        endAdornment:
                            <InputAdornment position="start">
                                <Button onClick={onClick} sx={{ borderRadius: '10px', padding: 'calc(5px + 0.390625vw)', backgroundColor: '#000' }}>
                                    Add
                                </Button>
                            </InputAdornment>
                    }
                }}>
            </TextField>
        </>
    );
}

export default InputField;