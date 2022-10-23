import React, { useState } from "react";

const SearchBar = ({onTermSubmit}) => {
    const [searchTerm,setSearchTerm] = useState('');
    
    const onInputChange=(e)=>{
        setSearchTerm(e.target.value)
    };

    const onFormSubmit=e=>{
        e.preventDefault();
        onTermSubmit(searchTerm)
    }

        return(
            <div className="searchBar ui segment ">
                <form onSubmit={onFormSubmit} className="ui form">
                    <div className="feild">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={onInputChange} />
                    </div>
                </form>
            </div>
        )
}

export default SearchBar;