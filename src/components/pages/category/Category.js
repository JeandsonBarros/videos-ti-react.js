import { Card, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';

function Category() {

    const [listVideos, setListVideos] = useState([]);
    const { category } = useParams()
    const [page, setPage] = useState(1);
    const [countPagination, setCountPagination] = useState(1);

    useEffect(() => {

        VideosService.findBy("matter", category, page).then(data => {
            setCountPagination(data.totalPages)
            setListVideos(data.data)
        })

    }, [category, page])

    return (
        <>
            <section>

                <Card className='cardTitle' elevation={5}>

                    <h1>Vídeos de {category}</h1>

                    {listVideos.length === 0 && <p>Nada encontrado :(</p>}

                </Card>

                <ListVideos videos={listVideos} />

            </section>

            <div className='divPagination'>
                {listVideos.length > 0 && <Pagination
                    color='primary'
                    count={countPagination}
                    onChange={(event, value) => setPage(value)}
                    page={page}
                />}
            </div>
        </>
    );
}

export default Category;