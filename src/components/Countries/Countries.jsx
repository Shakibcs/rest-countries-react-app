import { useEffect, useState } from "react";
import Country from "../country/country.jsx";
import './Countries.css'
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
<div className="contries-container">
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>

        
    );
};

export default Countries;