import '../Style.css';

import { Card, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';

function Videos() {

    const [listVideos, setListVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [countPagination, setCountPagination] = useState(1);

    useEffect(() => {

        VideosService.findBy("type", "Vídeo", page).then(data => {
            setCountPagination(data.totalPages)
            setListVideos(data.data)
        })

    }, [page])

    return (
        <>
            <section>

                <Card className='cardTitle' elevation={5}>

                    <h1>Vídeos de TI</h1>

                    <span>
                        Listagem de vídeos de tecnologia da informação.
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

export default Videos;