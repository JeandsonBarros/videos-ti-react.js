import '../Style.css';
import './NavbarStyle.css';

import { Button, Divider, Drawer, IconButton, List, ListItem, } from '@mui/material';
import React, { useState } from 'react';
import { MdHomeFilled, MdOutlinePlaylistPlay, MdOndemandVideo, MdOutlineAdminPanelSettings, MdVideoLibrary } from 'react-icons/md';
import { RiMenu3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import Search from '../search/Search';

function Navbar() {

  /* const languages = ["DiJava","DiPython","DiJavascript1 ","DiPhp ","DiRuby "]
  const frameworks = ["DiAngularSimple ","DiReact ","DiLaravel ","DiDjango ","DiNodejsSmall"]
  const resources =[ "DiGit ","DiGithubBadge ","DiMysql ","DiMongodb", "DiCss3", "DiHtml5" ]
 */

  const languages = ["Java", "Python", "JavaScript", "PHP", "Ruby"]
  const frameworks = ["Angular", "React", "Laravel", "Django", "Node.js", "Spring Boot"]
  const resources = ["Git", "GitHub", "MySQL", "MongoDB", "Css", "Html"]

  const listLinks = [languages, frameworks, resources]

  const [drawer, toggleDrawer] = useState(false)

  const navigate = useNavigate()

  function nav(href) {
    navigate(href)
    toggleDrawer(false)
  }


  return (
    <>
      <nav className='navApp'>

        <div id="navDiv">

          <IconButton onClick={() => toggleDrawer(true)} color="primary">
            <RiMenu3Line />
          </IconButton>

          <Drawer
            anchor={"left"}
            open={drawer}
            onClose={() => toggleDrawer(false)}
          >
            <List >

              <IconButton onClick={() => toggleDrawer(false)} color="primary">
                <RiMenu3Line />
              </IconButton>

              <ListItem >
                <Button sx={{ textTransform: 'none' }} onClick={() => nav("/")} startIcon={<MdHomeFilled />}>
                  Home
                </Button>
              </ListItem>

              <ListItem >
                <Button sx={{ textTransform: 'none' }} onClick={() => nav("/videos")} startIcon={<MdOndemandVideo />}>
                  Vídeos
                </Button>
              </ListItem>

              <ListItem >
                <Button sx={{ textTransform: 'none' }} onClick={() => nav("/playlists")} startIcon={<MdVideoLibrary />}>
                  PlayLists
                </Button>
              </ListItem>

              <ListItem >
                <Button sx={{ textTransform: 'none' }} onClick={() => nav("/admin")} startIcon={<MdOutlineAdminPanelSettings />}>
                  Administrar
                </Button>
              </ListItem>

              {listLinks.map((items, indexItems) => {

                return (

                  <div key={indexItems}>

                    <Divider />

                    {items.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <Button sx={{ textTransform: 'none' }} onClick={() => nav("/" + item)} startIcon={<MdOutlinePlaylistPlay />}>
                            {item}
                          </Button>
                        </ListItem>
                      )
                    })}

                  </div>

                )

              })}

            </List>

          </Drawer>

        </div>

        <Search idSearch="searchNav" />

      </nav>

      <Divider id='hrHeader' />

    </>
  );
}

export default Navbar;