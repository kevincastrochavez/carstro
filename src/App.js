import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fab } from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Inventory from './pages/Inventory';
import Marketing from './pages/Marketing';
import SalesRepresentatives from './pages/SalesRepresentatives';
import AboutUs from './pages/AboutUs';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import Chatbot from 'react-chatbot-kit';

import config from './components/chatbot/config';
import ActionProvider from './components/chatbot/ActionProvider';
import MessageParser from './components/chatbot/MessageParser';

function App() {
  const [openChatbot, setOpenChatbot] = useState(false);

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <div className='app_fab' onClick={() => setOpenChatbot(!openChatbot)}>
          <TextsmsIcon />
        </div>

        {openChatbot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}

        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventory/:id' element={<CarDetails />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route
            path='/salesRepresentatives'
            element={<SalesRepresentatives />}
          />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
        {/* <Header
          logo='CAR | '
          link1='first link, '
          link2='second link, '
          link3='third link, '
          link4='fourth link, '
          className='sHeader '
          id='sHeader'
        />
        <Header
          logo='CARSTRO | '
          link1='first link, '
          link2='second link, '
          link3='third link, '
          link4='fourth link, '
          className='mlHeader'
          id='mlHeader'
        /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
