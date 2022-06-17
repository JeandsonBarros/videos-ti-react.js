import './App.css';

import { CssBaseline } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Container from './components/layouts/container/Container';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import Navbar from './components/layouts/nav_bar/Navbar';
import Home from './components/pages/home/Home';
import PlayLists from './components/pages/play_lists/PlayLists';
import Videos from './components/pages/videos/Videos';
import { themeDark, themeLight } from './Theme';
import Admin from './components/pages/admin/Admin';
import SearchPage from './components/pages/search_page/SearchPage';
import Category from './components/pages/category/Category';
import ShowVideo from './components/pages/show_video/ShowVideo';

function App() {

  const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
  const [light, setLight] = useState(lightThemeMq.matches || false)

  return (

    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />

      <BrowserRouter>

        <Header themeUsage={setLight} asThemeLight={light} />

        <Navbar />

        <Container>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:category' element={<Category/>} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/videos/:video' element={<ShowVideo/>} />
            <Route path='/playlists' element={<PlayLists />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/search' element={<SearchPage/>} />     
          </Routes>

        </Container>  

        <Footer />

      </BrowserRouter>

    </ThemeProvider>

  );
}

export default App;
