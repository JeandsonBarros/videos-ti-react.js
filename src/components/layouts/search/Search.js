import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import '../Style.css';
import './SearchStyle.css';

import { useNavigate } from 'react-router-dom';

function Search({ idSearch }) {

    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("")

    function searchVideo(event) {
        event.preventDefault()
        setSearch(event.target.value)
        navigate(
            { pathname: "/search", search: event.target.value },
            { state: { search: event.target.value }} 
            );
    }

    return (
        <div id={idSearch} >

            {showSearch ? (
                <FormControl variant="filled" id="formControl" fullWidth sx={{ m: 1 }} >
                    <InputLabel htmlFor="standard-adornment-password">Buscar</InputLabel>
                    <Input
                        id="searchInput"
                        onChange={searchVideo}
                        value={search}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowSearch(!showSearch)}
                                    color="primary"
                                >
                                    {<MdClose />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>)
                :
                <IconButton onClick={() => setShowSearch(!showSearch)} color="primary">
                    <MdSearch />
                </IconButton>
            }

        </div>
    );
}

export default Search;