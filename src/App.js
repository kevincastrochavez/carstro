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

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />

        <Fab
          className='app_fab'
          size='small'
          aria-label='Scroll to top'
          // style={{ top: windowHeight, opacity: offsetHeight >= 2000 ? 1 : 0 }}
          onClick={() => console.log('clicked')}
        >
          <TextsmsIcon />
        </Fab>

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
