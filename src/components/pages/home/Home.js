import '../Style.css';

import { Card, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';


function Home() {

    const [page, setPage] = useState(1);
    const [countPagination, setCountPagination] = useState(1);
    const [listVideos, setListVideos] = useState([]);

    useEffect(() => {

        VideosService.getAll(page).then(data => {
            setCountPagination(data.totalPages)
            setListVideos(data.data)
        })

    }, [page])

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

                 <ListVideos videos={listVideos} />

            </section>

            <div className='divPagination'>
                <Pagination
                    color='primary'
                    count={countPagination}
                    onChange={(event, value) => setPage(value)}
                    page={page}

                />
            </div>

        </>
    );
}

export default Home;