import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FormVideo from '../../../layouts/forms/form_video/FormVideo';
import React, { useState, useEffect } from 'react';
import { MdAddCircle } from "react-icons/md";
import SnackbarAlert from '../snackbar_alert/SnackbarAlert';

function AddVideo() {

    const [open, setOpen] = useState(false);
    const [alertSnackbar, setAlert] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/videos")
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    async function submit(videoObject) {

        let fetchData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoObject)
        }

        let response = await fetch('http://localhost:8080/videos', fetchData)
        let data = await response.json()

        const alertServe = <SnackbarAlert text={data} severity={response.status === 201 ? "success" : "error"} />

        setAlert(alertServe)
   
    }

    return (
        <>

            {alertSnackbar}
           
            <SpeedDial
                ariaLabel="SpeedDial add video"
                sx={{ position: 'absolute', bottom: 0, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={() => setOpen(true)}
            >
            </SpeedDial>

            <FormVideo
                open={open}
                setOpen={setOpen}
                title="Novo vídeo"
                btnText="Salvar"
                iconForm={<MdAddCircle />}
                submit={submit}
            />

        </>
    );
}

export default AddVideo;