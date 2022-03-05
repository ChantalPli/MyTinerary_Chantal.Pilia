import HeroImage from "../HeroImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../api';
import UnderConstruction from "../UnderConstruction";
import CardDos from "../ItineraryPrueba";


// <City name="Medellín" image="image.jpg" />

export default function City() {
    const { id } = useParams();///toma el id que esta en la url
    const [city, setCity] = useState(null);
    const [isCityLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        api.obtainCity(id).then(response => {
            if (response.data.success) {
                setCity(response.data.content.city);
            }
            setIsLoaded(true);
        });
    });
    return (
        !isCityLoaded ? (<h1>Loading...</h1>) :
            city === null ? (<h1>City not found</h1>) :
                (<>
                    <HeroImage image={api.url + city.image}>
                        <h1>{city.name}</h1>
                        <p>Under construction</p>
                    </HeroImage>
                    <CardDos />
                    <UnderConstruction title={city.name} image={city.image}>
                        <p>Under construction</p>
                    </UnderConstruction>




                </>)
    );
}
