import '../Style.css';
import './HomeStyle.css'

import { Card, Divider, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';

function Home() {

    const [playList, setPlayList] = useState([]);
    const [listVideos, setListVideos] = useState([]);

    useEffect(() => {

        VideosService.findBy("type", "PlayList", 1).then(data => {
            setPlayList(data.data.slice(0, 4))
        })

        VideosService.findBy("type", "Vídeo", 1).then(data => {
            setListVideos(data.data.slice(0, 4))
        })

    }, [])

    return (
        <>
            <section>

                <Card className='cardTitle' elevation={5}>

                    <h1>Bem-vindo(a) ao Vídeos TI </h1>

                    <span>
                        Essa plataforma visa sugerir diversos vídeos de diversos canais do YouTube
                        relacionados a área de T.I,  com a finalidade de ajudar aqueles que buscam conhecimento na área.
                    </span>

                </Card>

                <Link to="/videos" component={NavLink}>Vídeos</Link>
                <Divider />
                <ListVideos videos={listVideos} />

                <Link to="/playlists" component={NavLink}>PlayLists</Link>
                <Divider />
                <ListVideos videos={playList} />

            </section>

        </>
    );
}

export default Home;