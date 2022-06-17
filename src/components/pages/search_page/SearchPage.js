import { Card, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';

function SearchPage() {

    const location = useLocation()
    const [search, setSearch] = useState("")
    const [listVideos, setListVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [countPagination, setCountPagination] = useState(1);

    useEffect(() => {

        if (location.state.search) {

            setSearch(location.state.search)

            VideosService.findBy("name", location.state.search, page).then(data => {
                setCountPagination(data.totalPages)
                setListVideos(data.data)
            })

        } else {
            setListVideos([])
            setSearch("")
        }

    }, [location, page])

    return (
        <>
            <section>

                <Card className='cardTitle' elevation={5}>

                    <h1>Busca por: {search} </h1>

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

export default SearchPage;