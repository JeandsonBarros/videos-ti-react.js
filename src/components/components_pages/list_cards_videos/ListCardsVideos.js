import CardVideo from '../../layouts/card/CardVideo';
import '../Style.css';
import './ListCardsVideosStyle.css';
import CircularProgress from '@mui/material/CircularProgress';


function ListVideos({ videos }) {

   
    return (

        <div className='divList'>

            {videos ?

                videos.map((videoCard, index) => {
                    return <CardVideo key={index}
                        title={videoCard.name}
                        channel={videoCard.channel}
                        url={videoCard.url}
                        matter={videoCard.matter}
                        type={videoCard.type}
                        _id={videoCard._id}
                        thumbnail={videoCard.thumbnail}
                    />
                })

                :

                <CircularProgress sx={{ mt: 5 }} />
            }
            
        </div>
    );
}

export default ListVideos;