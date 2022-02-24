import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroImage from '../HeroImage';

import '../styles/Cities.css';

import api from '../../api.js';

import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import React, { useState, useEffect } from 'react';

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    trim: true,
});

export default function Cities() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cities, setCities] = useState([]);
    useEffect(() => {
        api.fetchCities().then(response => response.json()).then(data => {
            setCities(data);
            setIsLoaded(true);
        });
    });
    return (
        <>
            <HeroImage image={api.url + "/assets/italy.jpg"}>

            </HeroImage>
            <Autocomplete
                freeSolo
                disableClearable
                filterOptions={filterOptions}
                sx={{ margin: '16px auto', width: 300 }}
                options={cities.map(city => city.name).sort()}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Search cities"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
            <section className="cards-of-cities">
                {!isLoaded ? (<h2>Loading...</h2>) :
                cities.length == 0 ? (<h2>No cities</h2>) :
                cities.map((city, index) =>
                    <Card key={index} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={api.url + city.image}
                            alt={city.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {city.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {city.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )}
            </section>
        </>
    )
}