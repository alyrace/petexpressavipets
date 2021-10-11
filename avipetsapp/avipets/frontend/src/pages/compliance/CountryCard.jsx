import React, {useState, useEffect} from 'react'

const CountryCard = () => {
    const url = "https://countriesnow.space/api/v0.1/countries/flag/unicode";
    const [countries, setCountry] = useState([]);

    const fetchCountryData = async () => {
        const res = await fetch(url);
        const country = await res.json();
        setCountry(country)
    }

    useEffect(() => {
        fetchCountryData();
    }, [])
    return (

        <div>
            {/*countries?.map(country => {
                <img src={country.flag} alt="" />
            })*/}
        </div>
    )
}

export default CountryCard
