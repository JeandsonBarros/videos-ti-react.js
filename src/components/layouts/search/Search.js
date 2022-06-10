import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import '../Style.css';
import './SearchStyle.css';

function Search({ idSearch }) {

    const [search, setSerch] = useState(false);

    return (
        <div id={idSearch} >

            {search ? (
                <FormControl variant="filled" id="formControl" fullWidth  sx={{ m: 1}} >
                    <InputLabel htmlFor="standard-adornment-password">Buscar</InputLabel>
                    <Input
                        id="standard-adornment-password"    
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setSerch(!search)}
                                    color="primary"
                                >
                                    {<MdClose />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>)
                :
                <IconButton onClick={() => setSerch(!search)} color="primary">
                    <MdSearch />
                </IconButton>
            }

        </div>
    );
}

export default Search;