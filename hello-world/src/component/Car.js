import { useState } from "react";

const Car = () =>{
    const [car,setCar] = useState(
        {
            brand:"Ford",
            model:"XR20",
            color:"Red",
            year:"2022"
        }
    );
    const updateCar = () =>{
        setCar(previoursCar =>{
            //... will copy all the object properties
            return {...previoursCar,color:"blue"}
        }

        );
    }
    return(
        <>
        <h2>My Favourite {car.brand} of the {car.year}</h2>
        <p>I love {car.color} {car.brand} {car.model} of the year {car.year} </p>
        <button onClick={updateCar}>Update Car State</button>
        </>
    )
}
export default Car