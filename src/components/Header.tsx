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
import { useTheme } from '@emotion/react';
import { Bedtime, Brightness1, BrightnessHigh, NavigateNext } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `8px`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: 'black',
    boxShadow: theme.shadows[3],
    color: '#fff',
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
                <StyledToolbar variant="dense" disableGutters>
                    {/* Desktop */}
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <AcUnitIcon />
                        <Button color="primary">DuyThaiTools</Button>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button variant="text" size="small">
                                Features
                            </Button>
                            <Button variant="text" size="small">
                                Testimonials
                            </Button>
                            <Button variant="text" size="small">
                                Highlights
                            </Button>
                            <Button variant="text" size="small">
                                Pricing
                            </Button>
                            <Button variant="text" size="small" sx={{ minWidth: 0 }}>
                                FAQ
                            </Button>
                            <Button variant="text" size="small" sx={{ minWidth: 0 }}>
                                Blog
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
                        <Button color="primary" variant="text" size="small">
                            Sign in
                        </Button>
                        <Button color="primary" variant="contained" size="small">
                            Sign up
                        </Button>
                        <Button variant="outlined" onClick={handleChangeTheme} sx={{ minWidth: 0, p: 1 }}>
                            {mode === 'light' ? <BrightnessHigh /> : <Bedtime />}
                        </Button>
                    </Box>
                    {/* Mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
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
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
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
                                        Sign up
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Button color="primary" variant="outlined" fullWidth>
                                        Sign in
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
