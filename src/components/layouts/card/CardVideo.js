import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import "./CardStyle.css";
import { useNavigate } from 'react-router-dom';

function CardVideo({ channel, type, matter, title, url, _id, thumbnail }) {

    const navigate = useNavigate()

    function nav() {
        navigate(
            { pathname: "/videos/" + title },
            { state: { url: url, channel: channel, type: type, matter: matter, title: title, _id: _id } }
        );
    }

    return (


        <Card onClick={nav} elevation={5} className="carVideo" sx={{ m: 3, maxWidth: 270 }}>

            {/*  <iframe width="270" height="190" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

            <img width="270" height="190" src={thumbnail} alt="eu" />

            <div className="divButton">

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {channel}
                </Typography>
                <Typography variant="h6" component="div" color="text.secondary">
                    {title}
                </Typography>
                <Typography sx={{ mt: 1, mb: 1 }} color="text.secondary">
                    {matter}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {type}
                </Typography>

            </div>

        </Card>

    );
}

export default CardVideo;