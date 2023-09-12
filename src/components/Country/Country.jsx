import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country);
const {name,flags,population, area,cca3} = country;

const [visited,setVisited] = useState(false);
const handleVisited = () =>{
    setVisited(!visited);
}
    return (
        <div className='country'>
            <h3>Country Name{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>{cca3}</p>
            <button onClick={handleVisited}>{visited? 'visited': 'Going'}</button>
            {visited? 'I have visited to the site' : 'I want to visit the site'}
           
        </div>
    );
};

export default Country;