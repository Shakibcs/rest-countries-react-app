import { useEffect, useState } from "react";
import Country from "../Country/Country.jsx";
const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))
    },[]);
    return (
        <div>
            <h3>Coutries:{countries.length}</h3>

            {
                countries.map(country => <Country country={country}></Country>)
            }
            
        </div>

        
    );
};

export default Countries;