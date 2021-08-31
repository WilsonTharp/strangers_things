import React from 'react';
import { TextField } from '@material-ui/core';
// test test 

const Search = ({search, setSearch}) => {
    return (
        <TextField variant="filled"
                   label="Search"
                   type='text'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   style={{marginTop: '.6rem', marginLeft: '2rem', marginRight: '2rem', width: '20rem', backgroundColor: 'lightgrey'}}/>
    )
}

export default Search;