import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../../util/api";
import { Link } from "react-router-dom";
import { Blocks } from 'react-loader-spinner'
import { BsArrowLeft } from "react-icons/bs";
import './Country.css'

const Country = () => {
    const [country, setCountry] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const { countryName } = useParams();

    const borders = country[0]?.borders || [];
    const currencies = country.length > 0 ? country[0].currencies : null;
    const languages = country.length > 0 ? country[0].languages : null;

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
                {error && !isLoading && <h4>{error}</h4>}
            </div>


            {country?.map((country, index) => (
                <div className="row" key={index}>
                    <div className="col-lg-4 col-md-6">
                        <img src={country.flags.png} alt="" />
                    </div>

                    <div className="country__info col-lg-8 col-md-6">
                        <h2>{country.name.common}</h2>

                        <div className="country__info-left">
                            <h5>Native name:{" "}
                                <span>{country.name.official}</span>
                            </h5>
                            <h5>
                                Population:{" "}
                                <span>
                                    {new Intl.NumberFormat().format(country.population)}
                                </span>
                            </h5>
                            <h5>
                                Region:{" "}
                                <span>{country.region}</span>
                            </h5>
                            <h5>
                                Sub Region:{" "}
                                <span>{country.subregion}</span>
                            </h5>
                            <h5>
                                Capital:{" "}
                                <span>{country.capital}</span>
                            </h5>
                           
                        </div>

                        <div className="country__info-right">
                            <h5>
                                Top level domain: {" "}
                                {country[0]?.tld?.[0] ? (
                                    <span>{country[0]?.tld?.[0]}</span>
                                ) : (
                                    <span>No top-level domain available.</span>
                                )}
                            </h5>
                            <h5>
                                Currencies: {" "}
                                {currencies ? (
                                    <>
                                        {Object.entries(currencies).map(([key, value]) => (
                                            <React.Fragment key={key}>
                                                {index > 0 && ", "}
                                                <span>
                                                    {value.name} ({value.symbol})
                                                </span>
                                            </React.Fragment>
                                        ))}
                                    </>
                                ) : (
                                    <span>No currency information available.</span>
                                )}
                            </h5>
                            <h5>
                                Languages: {" "}
                                {languages ? (
                                    <>
                                        {Object.entries(languages).map(([key, value], index) => (
                                            <React.Fragment key={key}>
                                                {index > 0 && ", "}
                                                <span>{value}</span>
                                            </React.Fragment>
                                        ))}
                                    </>
                                ) : (
                                    <span>No language information available.</span>
                                )}
                            </h5>
                        </div>
                        
                    </div>
                    <div className="country__borders col-lg-8 col-md-6">
                        {borders.length > 0 ? (
                            <h5>
                                Border Countries: {" "}
                                {borders.map((border, index) => (
                                    <span key={index}>{border}</span>
                                ))}
                            </h5>
                        ) : (
                            <h5>No border countries</h5>
                        )}
                    </div>
                </div>
            ))}
           
        </div>
    );
};

export default Country;