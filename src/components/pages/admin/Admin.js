import { Box, CircularProgress, List, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

import AddVideo from '../../../components/components_pages/add_video/AddVideo';
import ItemList from '../../../components/components_pages/item_list/ItemList';
import VideosService from '../../../services/VideosService';

function Admin() {

    const [showProgress, setShowProgress] = useState(true)
    const [listVideos, setListVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [countPagination, setCountPagination] = useState(1);

    useEffect(() => {

        getVideos()

    }, [getVideos, page])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getVideos() {

        VideosService.getAll(page).then(data => {
            setCountPagination(data.totalPages)
            setListVideos(data.data)
            setShowProgress(false)
        })

    }

    return (
        <>
            {showProgress ?
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
                :
                <>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {listVideos.map((item) => {
                            return (<ItemList getVideos={getVideos} key={item._id} video={item} />)
                        })}
                    </List>

                    <AddVideo getVideos={getVideos} />


                </>
            }
            {listVideos.length > 0 && <Pagination
                sx={{ display: "flex", justifyContent: "center", mt: 1 }}
                color='primary'
                count={countPagination}
                onChange={(event, value) => setPage(value)}
                page={page}
            />}
        </>
    );
}

export default Admin;