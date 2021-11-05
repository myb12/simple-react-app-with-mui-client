import { Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Typography variant="h3">
                This is Home
            </Typography>
        </div>
    );
};

export default Home;