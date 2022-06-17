
import "./ItemListStyle.css";
import { Typography, Button, Divider, ListItem, ListItemText } from '@mui/material';
import { MdDelete, MdModeEdit } from "react-icons/md";

import React, { useState } from 'react';
import SnackbarAlert from "../snackbar_alert/SnackbarAlert";
import FormVideo from "../../layouts/forms/form_video/FormVideo";
import ConfirmDialog from "../../layouts/confirm_dialog/ConfirmDialog";

import { useNavigate } from 'react-router-dom';


function ItemList({ video, getVideos }) {

    const navigate = useNavigate()
    const [openConfirm, setOpenConfirm] = useState(false);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [text, setText] = useState("OK");

    async function submit(videoObject) {

        let fetchData = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoObject)
        }

        let response = await fetch('http://localhost:8080/videos/' + video._id, fetchData)
        let data = await response.json()

        getVideos()

        setText(data)
        setSeverity(response.status === 201 ? "success" : "error")

        setVisible(true)

    }

    async function deleteVideo() {

        let fetchData = {
            method: 'DELETE',
        }

        let response = await fetch('http://localhost:8080/videos/' + video._id, fetchData)
        let data = await response.json()

        setText(data)
        setSeverity(response.status === 201 ? "success" : "error")

        setVisible(true)

        getVideos()
    }

    function nav() {
        navigate(
            { pathname: "/videos/" + video.name },
            { state: { url: video.url, channel: video.channel, type: video.type, matter: video.matter, title: video.name, _id: video._id } }
        );
    }

    return (
        <>

            <SnackbarAlert
                setVisuble={setVisible}
                visible={visible}
                text={text}
                severity={severity}
            />

            <ListItem alignItems="flex-start" className='listItems'>

                <img className="imgVideo" onClick={nav} width="270" height="190" src={video.thumbnail} alt="eu" />

                <div style={{ marginLeft: 10 }}>
                    <ListItemText>
                        <Typography sx={{ fontSize: 20 }}>
                            {video.name}
                        </Typography>
                    </ListItemText>

                    <ListItemText>{video.channel}</ListItemText>

                    <ListItemText>{video.matter}</ListItemText>

                    <ListItemText>{video.type}</ListItemText>

                    <Button variant="contained" onClick={() => setOpen(true)} sx={{ m: 1 }} startIcon={<MdModeEdit />} >Editar</Button>
                    <Button onClick={() => setOpenConfirm(true)} startIcon={<MdDelete />} variant="contained" sx={{ m: 1 }} color="error">Apagar</Button>

                </div>

            </ListItem>

            <FormVideo
                open={open}
                setOpen={setOpen}
                title="Editar vídeo"
                btnText="Editar"
                iconForm={<MdModeEdit />}
                submit={submit}
                videoObject={video}
            />

            <ConfirmDialog
                open={openConfirm}
                handleClose={setOpenConfirm}
                action={deleteVideo}
                title="Deletar"
                text={`Realmente deseja deletar o vídeo "${video.name}"?`}
                btnText="Deletar"
            />

            <Divider id="hrHeader" />

        </>
    );
}

export default ItemList;