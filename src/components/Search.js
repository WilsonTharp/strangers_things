import React from 'react';
import { TextField } from '@material-ui/core';

const Search = ({search, setSearch}) => {
    return (
        <TextField variant="filled"
                   label="Search"
                   type='text'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   style={{marginTop: '.6rem', marginLeft: '2rem', marginRight: '2rem', width: '20rem'}}/>
    )
}

export default Search;