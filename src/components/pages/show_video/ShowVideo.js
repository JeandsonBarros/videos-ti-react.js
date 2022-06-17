import './ShowVideo.css';

import { Divider, Typography, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import VideosService from '../../../services/VideosService';
import ListVideos from '../../components_pages/list_cards_videos/ListCardsVideos';

function ShowVideo() {

    const location = useLocation()

    const [listVideos, setListVideos] = useState([]);

    useEffect(() => {

        VideosService.findBy("matter", location.state.matter, 1).then(data => {

            const list = data.data.filter(item => {
                return item._id !== location.state._id;
            })
            setListVideos(list)
        })

    }, [location.state])

    //https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
    return (
        <div className='show'>

            <div className='containerVideo'>

                <div className='divVideo'>

                    {location.state.url ?

                        <iframe className='responsive-iframe' src={location.state.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        :
                        <Skeleton className='responsive-iframe' />}
                </div>

                <div>
                    <Typography variant="h6" component="div" color="text.secondary">
                        {location.state.title}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {location.state.channel}
                    </Typography>

                    <Typography sx={{ mt: 1, mb: 1 }} color="text.secondary">
                        {location.state.matter}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {location.state.type}
                    </Typography>
                </div>
                <Divider />
            </div>

            <div className='listLefet'>
                <ListVideos videos={listVideos} />
            </div>

        </div>

    );
}

export default ShowVideo;