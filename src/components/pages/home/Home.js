
import Card from '@mui/material/Card';
import CardVideo from '../../layouts/card/CardVideo';
import './Style.css';

import Container from '@mui/material/Container';


function Home() {


    return (

        <Container >

            <Card className='cardHome' elevation={5}>

                <h1>
                    <img style={{ marginRight: 10 }} src='./logo.png' height={50} width={50} alt="Jeandson Barros" />
                    Vídeos TI
                </h1>

                <span>
                    Essa plataforma visa sugerir diversos vídeos de diversos canais do YouTube
                    relacionados a área de T.I,  com a finalidade de ajudar aqueles que buscam conhecimento na área.
                </span>

            </Card>

            <div>
                <CardVideo/>
            </div>

              
        </Container>

    );
}

export default Home;