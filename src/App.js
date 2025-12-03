import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'
import SamsungScreen from './screens/SamsungScreen'
import FujifilmScreen from './screens/FujifilmScreen'
import SonyScreen from './screens/SonyScreen'
import CanonScreen from './screens/CanonScreen'
import KodakScreen from './screens/KodakScreen'
import NikonScreen from './screens/NikonScreen'

function App() {
  return (
   <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/samsung' element={<SamsungScreen />} />
            <Route path='/fujifilm' element={<FujifilmScreen />} />
            <Route path='/sony' element={<SonyScreen />} />
            <Route path='/canon' element={<CanonScreen />} />
            <Route path='/kodak' element={<KodakScreen />} />
            <Route path='/nikon' element={<NikonScreen />} />


          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
