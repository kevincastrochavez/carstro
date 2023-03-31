import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextsmsIcon from '@mui/icons-material/Textsms';

import Header from './components/Header';
// import Homepage from './pages/Homepage';
import Inventory from './pages/Inventory';
import Marketing from './pages/Marketing';
import SalesRepresentatives from './pages/SalesRepresentatives';
import AboutUs from './pages/AboutUs';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import Chatbot from 'react-chatbot-kit';

import { lazy, Suspense } from 'react';
import config from './components/chatbot/config';
import ActionProvider from './components/chatbot/ActionProvider';
import MessageParser from './components/chatbot/MessageParser';
import { useStateValue } from './StateProvider';

const Homepage = lazy(() => import('./pages/Homepage'))

function App() {
  const [{ showChat }, dispatch] = useStateValue();

  const toggleChat = () => {
    dispatch({
      type: 'SHOW_CHAT',
      showChat: !showChat,
    });
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <div className='app_fab' onClick={toggleChat}>
          <TextsmsIcon />
        </div>

        {showChat && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        )}

        <Routes>
          <Route exact path='/' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Homepage />
            </Suspense>
          } />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/inventory/:id' element={<CarDetails />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route
            path='/salesRepresentatives'
            element={<SalesRepresentatives />}
          />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
