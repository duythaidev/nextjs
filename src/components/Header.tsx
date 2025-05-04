'use client'
import { useState } from 'react';
import { styled, useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Bedtime, BrightnessHigh } from '@mui/icons-material';
import Link from 'next/link';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `8px`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: theme.palette.primary.main === '#fff' ? '0 0 20px rgba(255, 255, 255, 0.1)' : '0 0 20px rgba(0, 0, 0, 0.1)', // bóng đỏ mờ
    padding: '8px 12px',
}));

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const { mode, setMode } = useColorScheme();

    const handleChangeTheme = () => {
        if (mode === 'system' || mode === 'dark') {
            setMode('light')
            return
        }

        setMode('dark')
    }

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters >
                    {/* Desktop */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <AcUnitIcon />
                        <Button sx={{ color: 'black' }}>DuyThaiTools</Button>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{ color: 'black' }} variant="text" size="small">
                                <Link href={'/'}>Home</Link>
                            </Button>
                            <Button variant="text" size="small" sx={{ minWidth: 0, color: 'black' }} >
                                <Link href={'/todo'}>Todos App</Link>
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button variant="text" sx={{ color: 'black' }} size="small">
                            <Link href={'/login'}>Sign in</Link>
                        </Button>
                        <Button variant="contained" sx={{ color: 'white', backgroundColor: 'black' }} size="small">
                            <Link href={'/register'}>Sign up</Link>
                        </Button>
                        <Button variant="outlined" onClick={handleChangeTheme} color='secondary' sx={{ borderColor: 'black', backgroundColor: 'primary.main', minWidth: 0, p: 1 }}>
                            {mode === 'light' ? <Bedtime /> : <BrightnessHigh />}
                        </Button>
                    </Box>
                    {/* Mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>

                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon sx={{ color: 'black' }} />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                    <Button variant="outlined" onClick={handleChangeTheme} color='secondary' sx={{ borderColor: 'black', backgroundColor: 'primary.main', minWidth: 0, p: 1 }}>
                                        {mode === 'light' ? <Bedtime /> : <BrightnessHigh />}
                                    </Button>
                                </Box>

                                <MenuItem>Features</MenuItem>
                                <MenuItem>Testimonials</MenuItem>
                                <MenuItem>Highlights</MenuItem>
                                <MenuItem>Pricing</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <Divider sx={{ my: 3 }} />
                                <MenuItem>
                                    <Button color="primary" variant="contained" fullWidth>
                                        <Link href={'/register'}>Sign up</Link>
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="primary" variant="outlined" fullWidth>
                                        <Link href={'/login'}>Sign in</Link>
                                    </Button>
                                </MenuItem>



                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
