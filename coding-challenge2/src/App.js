import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar';
import RouteAvail from './Pages/Avail/RouteAvail';
import RouteInfo from './Pages/Info/RouteInfo';
import Purchase from './Pages/Purchase/Purchase';
import Checkout from './Pages/CheckOut/Checkout';
import {TicketPurchaseContextProvider} from './Context/TicketPurchaseContext';

function App() {
  return (
    <div className="App">
      <TicketPurchaseContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<RouteAvail />} />
            <Route path='/information/:id' element={<RouteInfo />} /> {/* Dynamic route with :id parameter */}
            <Route path='/cart' element={<Purchase />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/home' element={<RouteAvail/>}/>
          </Routes>
        </HashRouter>
      </TicketPurchaseContextProvider>
    </div>
  );
}

export default App;
