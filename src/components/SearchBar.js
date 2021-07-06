import React, { useState, useEffect } from 'react';

const SearchBar = ({handleSubmit}) => {

    const [term,setTerm] = useState('');

    const handleOnChange = (event) => {
        setTerm(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(term)
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term}
                        onChange={handleOnChange}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchBar;