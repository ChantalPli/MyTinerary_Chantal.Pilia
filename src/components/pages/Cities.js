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
import { Link as LinkRouter } from "react-router-dom"

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    trim: true,
});

// const [search, setSearch] = useState('');

export default function Cities() {
    const [search, setSearch] = useState('');
    const [allCities, setAllCities] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        api.obtainCities().then(response => {
            if (response.data.success) {
                setAllCities(response.data.content.cities);
                setIsLoaded(true);
            }
        });
        // const response = await api.obtainCities();
        // if (response.data.success) {
        // setAllCities();
        // setIsLoaded(true);
        // }
    });
    const cities = search === '' ? allCities : allCities.filter(city => city.name.toLowerCase().startsWith(search.toLowerCase()));
    return (
        <>
            <HeroImage image={api.url + "/images/sardegna_hero.jpg"}>
                <h1>LET THE ADVENTURE BEGIN</h1>
            </HeroImage>
            <Autocomplete
                freeSolo
                disableClearable
                filterOptions={filterOptions}
                sx={{ margin: '16px auto', width: 300 }}
                options={allCities.map(city => city.name).sort()}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Search cities"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                        onChange={event => {
                            setSearch(event.target.value.trim().toLowerCase())
                        }}
                    />
                )}
            />
            <section className="cards-of-cities">
                {
                    !isLoaded ? (<h2>Loading...</h2>) :
                        cities.length === 0 ? (<h2>Sorry, we couldn't find any results for this search</h2>) :
                            cities.map((city, index) =>
                                <Card className="cards_h lampara" key={index} sx={{ maxWidth: 600, }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
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
                                    <LinkRouter style={{ textDecoration: 'none' }} to={"/cities/" + city._id}>
                                        {/* <LinkRouter to=`detalle/${cities.id}`}> */}
                                        <CardActions>

                                            <Button size="small">More Details</Button>

                                        </CardActions>
                                    </LinkRouter>
                                </Card>
                            )}
            </section>
        </>
    )
}