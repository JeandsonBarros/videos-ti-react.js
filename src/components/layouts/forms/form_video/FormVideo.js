import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function FormVideo({ open, setOpen, title, btnText, iconForm, submit, videoObject }) {

    const [video, setVideo] = useState(videoObject || {})

    function handleValue(event) {
        setVideo({ ...video, [event.target.name]: event.target.value })    
    }

    function handleSubmit(event){
        event.preventDefault()
        setOpen(false)
        submit(video)
    }

  
    return (
        <>

            <Dialog open={open} onClose={() => setOpen(false)}>

                <DialogTitle> {iconForm} {title} </DialogTitle>

                <form onSubmit={handleSubmit}>

                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nome"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={video.name ? video.name : ""}
                            onChange={handleValue}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="url"
                            name="url"
                            label="Url"
                            type="url"
                            fullWidth
                            variant="standard"
                            value={video.url ? video.url : ""}
                            onChange={handleValue}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="matter"
                            name="matter"
                            label="Matéria"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={video.matter ? video.matter : ""}
                            onChange={handleValue}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="channel"
                            name="channel"
                            label="Canal"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={video.channel ? video.channel : ""}
                            onChange={handleValue}
                        />

                        <FormControl fullWidth sx={{ marginTop: 2 }}>

                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>

                            <Select
                                labelId="demo-simple-select-label"
                                id="type"
                                name="type"
                                value={video.type ? video.type : ""}
                                label="Tipo"
                                onChange={handleValue}

                            >
                                <MenuItem value="video">Vídeo</MenuItem>
                                <MenuItem value="playlist">PlayList</MenuItem>
                            </Select>

                        </FormControl>

                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit">{btnText}</Button>
                    </DialogActions>
                </form>
            </Dialog>

        </>
    );
}

export default FormVideo;