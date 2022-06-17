import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FormVideo from '../../layouts/forms/form_video/FormVideo';
import React, { useState } from 'react';
import { MdAddCircle } from "react-icons/md";
import SnackbarAlert from '../snackbar_alert/SnackbarAlert';

function AddVideo({getVideos}) {

    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [text, setText] = useState("OK");

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

        getVideos()

        setText(data)
        setSeverity(response.status === 201 ? "success" : "error")

        setVisible(true)

    }

    return (
        <>

            <SnackbarAlert
                setVisuble={setVisible}
                visible={visible}
                text={text}
                severity={severity} 
            />

            <SpeedDial
                ariaLabel="SpeedDial add video"
                sx={{ position: 'fixed', bottom: 55, right: 16 }}
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