import HeroImage from "../HeroImage";

// <City name="{city.name}" image="{city.image}" />

export default function City(props) {
    return (
        <>
            <HeroImage image={props.image}>
                <h1>{props.name}</h1>
            </HeroImage>
        </>
    );
}