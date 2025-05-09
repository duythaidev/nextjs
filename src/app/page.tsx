'use client'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useColorScheme } from "@mui/material";

export default function Home() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box sx={{
      marginTop: '100px',
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.defwault',
      color: 'text.primary',
      borderRadius: 1,
      p: 3,
      minHeight: '56px',
    }}>
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value as 'system' | 'light' | 'dark')}
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
