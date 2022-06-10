import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function CardVideo() {

    return (

        <Card elevation={5} sx={{ margin: 3, width: "10%" }}>
            <iframe width="270" height="190" src="https://www.youtube.com/embed/kK69xiR11cQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div style={{padding: 7}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Canal
                </Typography>
                <Typography variant="h5" component="div">
                    Titulo
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Matéria
                </Typography>
                <Typography variant="body2">
                    Tipo
                </Typography>
            </div>
        </Card>
    );
}

export default CardVideo;