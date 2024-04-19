import React, { useEffect, useState } from 'react';
import Box from '../Components/Box';
import '../css/data.css'
import { getAllBreweries } from '../services/breweries';

function Breweries() {
    const [breweries, setBreweries] = useState([]);

    const fetchData = async () => {
        try {
            const data = await getAllBreweries();
            setBreweries(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='data'>
            {breweries.map((data, key) => (
                <Box 
                number={23}
                title={'Nom'}
                key={key} />
            ))}
        </div>
    );
}

export default Breweries;
