import "./FooterStyle.css";
import "../Style.css";

import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "@mui/material";
import Divider from '@mui/material/Divider';

function Footer() {
    return (
        <>
            <Divider id='hrHeader' />
            <footer>
                <Link href="https://www.linkedin.com/in/jeandson-barros-1aa133221/"> <AiOutlineLinkedin/> Jeandson Barros</Link>
            </footer>
        </>
    );
}

export default Footer;