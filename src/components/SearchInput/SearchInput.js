import React, { useState } from "react";
import "./SearchInput.css"


const SearchInput = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form className="form__field" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Search countries here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <span className="icon">🔍</span>
        </form>
    );
};

export default SearchInput;