import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <Box className="banner-container" style={{ backgroundColor: 'cyan' }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center' }}>
                <Typography variant="h3" sx={{ color: '#fff', fontWeight: 'bold' }}>
                   MYB
                </Typography>
                <Typography variant="h5" sx={{ color: '#fff' }}>
                    Job Portal Website
                </Typography>
                <Typography sx={{ color: '#fff' }}>
                    MYB Job Portal websites. Nice and clean design.
                </Typography>

                <Button variant="contained">View More</Button>
            </Container>
        </Box>
    );
};

export default Banner;