import React, { useState, useEffect } from "react";
import { apiURL } from "../../util/api";
import SearchInput from "../SearchInput/SearchInput";
import FilterCountry from "../FilterCountry/FilterCountry";
import { Link } from "react-router-dom";
import { Blocks } from 'react-loader-spinner'
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const getAllCountries = async () => {
        try {
            const res = await fetch(`${apiURL}/all`);
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            console.log(data);
            setCountries(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    const getCountryByName = async (countryName) => {
        try {
            const res = await fetch(`${apiURL}/name/${countryName}`);
            if (!res.ok) throw new Error("Not found any country!");
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    const getCountryByRegion = async (regionName) => {
        try {
            const res = await fetch(`${apiURL}/region/${regionName}`);
            if (!res.ok) throw new Error("Failed..........");
            const data = await res.json();
            setCountries(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(false);
        }
    };

    useEffect(() => {
        getAllCountries();
    }, []);

    return (
        <div className="all__country__wrapper">
            <div className="country__top">
                <div className="search">
                    <SearchInput onSearch={getCountryByName} />
                </div>

                <div className="filter">
                    <FilterCountry onSelect={getCountryByRegion} />
                </div>
            </div>

            <div className="country__bottom">

                {isLoading && !error && <Blocks
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                />}
                {error && !isLoading && <h4>{error}</h4>}

                <div className="row">
                    {countries?.map((country, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={country.name.common}>
                            <Link to={`/country/${country.name.common}`} >
                                <div key={index} className="country__card">
                                    <div className="country__img" style={{ backgroundImage: `url(${country.flags.png})` }}>
                                    </div>

                                    <div className="country__data">
                                        <h3>{country.name.common}</h3>
                                        <h6>
                                            Population:{" "}
                                            {new Intl.NumberFormat().format(country.population)}
                                        </h6>
                                        <h6> Region: {country.region}</h6>
                                        {country.capital ? (
                                            <h6>Capital: {country.capital}</h6>
                                        ) : (
                                            <h6>
                                                Capital:{" "}
                                                <span>No capital information available.</span>
                                            </h6>
                                        )}

                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Countries;
