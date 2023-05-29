import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchInput.css"


const SearchInput = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form className="form__field" onSubmit={submitHandler}>
            <BsSearch className="icon"/>
            <input
                type="text"
                placeholder="Search for a country ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
};

export default SearchInput;