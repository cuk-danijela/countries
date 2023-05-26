import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../util/api";
import { Link } from "react-router-dom";
import { Blocks } from 'react-loader-spinner'
import { BsArrowLeft } from "react-icons/bs";


const Country = () => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const { countryName } = useParams();
    
    const borders = country.map((country) => country.borders);

    useEffect(() => {
        const getCountryByName = async () => {
            try {
                const res = await fetch(`${apiURL}/name/${countryName}`);
                if (!res.ok) throw new Error("Could not found!");
                const data = await res.json();
                setCountry(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        getCountryByName();
    }, [countryName]);

    return (
        <div className="country__info__wrapper">

            <Link to="/"><button><BsArrowLeft /> Back</button></Link>
            <div>
                {isLoading && !error && <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />}
                {error && !isLoading && { error }}
            </div>


            {country?.map((country, index) => (
                <div className="country__info__container" key={index}>
                    <div className="country__info-img">
                        <img src={country.flags.png} alt="" />
                    </div>

                    <div className="country__info">
                        <h3>{country.name.common}</h3>

                        <div className="country__info-left">
                            <h5>Native name: 
                                {country.name.official}
                                </h5>
                            <h5>
                                Population:{" "}
                                <span>
                                    {new Intl.NumberFormat().format(country.population)}
                                </span>
                            </h5>
                            <h5>
                                Region: <span>{country.region}</span>
                            </h5>
                            <h5>
                                Sub Region: <span>{country.subregion}</span>
                            </h5>
                            <h5>
                                Capital: <span>{country.capital}</span>
                            </h5>
                        </div>
                     
                        <h5><span>Border Countries: {borders}</span></h5>
                    </div>
                </div>
            ))}
            <div className="country__info-right">
                <h5>Top level domain: <span></span></h5>
                <h5>
                    Currencies:<span></span>
                </h5>
                <h5>
                    Languages: <span>
                        {country.languages?.map((lang, index) => (<span key={index} className="card-tags">{lang}</span>))}
                    </span>
                </h5>
            </div>
        </div>
    );
};

export default Country;