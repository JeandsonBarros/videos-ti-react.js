import './NavbarStyle.css';
import "../Style.css";

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { RiMenu3Line } from 'react-icons/ri';
import { Link as LinkDOM } from 'react-router-dom';
import Search from '../search/Search';

function Navbar() {
  return (
    <>
      <nav>

        <div id="navDiv">
          <IconButton color="secondary">
            <RiMenu3Line />
          </IconButton>

          <ul className="navUl">
            <li>
              <Link className="link" underline="none" component={LinkDOM} to='/'> Home </Link>
            </li>
            <li >
              <Link className="link" underline="none" component={LinkDOM} to="/videos"> Vídeos </Link>
            </li>
            <li >
              <Link className="link" underline="none" component={LinkDOM} to="/playlists"> Playlists </Link>
            </li>
          </ul>
        </div>

        <Search idSearch="searchNav" />

      </nav>
     
      <Divider id='hrHeader' />
     
     

    </>
  );
}

export default Navbar;