import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import Navigation from '../Shared/Navigation/Navigation';
import './Services.css';

const Services = () => {
    return (
        <>
            <Navigation />
            <Container style={{ marginTop: 100 }}>
                <Typography variant="h4" className="title">Our Services</Typography>
                <Grid container spacing={3}>
                    {
                        [...Array(12)].map((el, i) => <CardComponent key={i} />)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Services;