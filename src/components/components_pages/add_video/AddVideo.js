import { SpeedDial, SpeedDialIcon } from '@mui/material';
import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

import VideosService from '../../../services/VideosService';
import FormVideo from '../../layouts/forms/form_video/FormVideo';
import SnackbarAlert from '../snackbar_alert/SnackbarAlert';


function AddVideo({ getVideos }) {

    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [text, setText] = useState("OK");

    async function submit(videoObject) {

        const response = await VideosService.postVideo(videoObject)

        getVideos()

        setText(response.message)
        setSeverity(response.status)

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