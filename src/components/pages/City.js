import HeroImage from "../HeroImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from '../../api';
import UnderConstruction from "../UnderConstruction";
import Itinerary from "../Itinerary";

import { connect, useDispatch, } from 'react-redux';
import citiesAction from '../../redux/actions/citiesAction';

function City(props) {
    const { id } = useParams();///toma el id que esta en la url
    // const [city, setCity] = useState(null);
    // const [isCityLoaded, setIsLoaded] = useState(false);
    // useEffect(() => {
    //     api.obtainCity(id).then(response => {
    //         if (response.data.success) {
    //             setCity(response.data.content.city);
    //         }
    //         setIsLoaded(true);
    //     });
    // });
    const {
        cityReady: ready, // Indica si la lista de ciudades cargó
        city, // Contiene la ciudad a renderizar
        obtainCity, // funcion que obtiene la ciudad a renderizar desde el backend
    } = props;
    // const dispatch = useDispatch();
    useEffect(() => {
        obtainCity(id);
    }, []);
    return (
        !ready ? (<h1>Loading...</h1>) :
            city === null ? (<h1>City not found</h1>) :
                (<>
                    <HeroImage image={api.url + city.image}>
                        <h1>{city.name}</h1>
                        {/* <p>Under construction</p> */}
                    </HeroImage>
                    {
                        city.itineraries.length === 0 ? (<h4>NOOOOOOOOO ESTOYYYYYYYYYYYY</h4>) :
                            city.itineraries.map(itinerary => <Itinerary key={itinerary._id} data={itinerary} />)
                    }
                    {/* <UnderConstruction title={city.name} image={city.image}>
                        Under construction
                    </UnderConstruction> */}
                </>)
    );
}

export default connect(state => state.citiesReducer, citiesAction)(City);