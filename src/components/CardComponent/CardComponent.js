import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import './CardComponent.css';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const CardComponent = () => {
    return (
        <Grid item xs={12} sm={6} md={4} className="card-container">
            <Card className="card">
                <CardMedia
                    component="img"
                    height="200"
                    image="https://mui.com/static/images/cards/paella.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 0 }}>
                    {/* <Button size="small" sx={{ color: '#03a84e' }}>Share</Button>
                    <Button size="small" sx={{ color: '#03a84e' }}> Learn More</Button> */}
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ backgroundColor: '#03a84e' }}>
                            <Button sx={{ color: '#fff', width: 1, border: '2px solid #03a84e' }} className="btn-card-1">Share</Button>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ backgroundColor: '#f5d338' }}>
                            <Button sx={{ color: '#fff', width: 1, border: '2px solid #f5d338' }} className="btn-card-2">
                                <BsFillBookmarkFill style={{fontSize:24}} />
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={3} sx={{ backgroundColor: '#dc3545' }}>
                            <Button sx={{ color: '#fff', width: 1, border: '2px solid #dc3545' }} className="btn-card-3">
                                <AiFillHeart style={{fontSize:24}}/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default CardComponent;