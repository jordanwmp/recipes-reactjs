import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/Home';
import Detalhes from './pages/Detalhes/Detalhes';
import Navbar from './components/Navbar/Navbar';
import { ApiProvider } from './context/ApiContext';

function App() {

  return (
    <BrowserRouter>
      <ApiProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detalhes/:id' element={<Detalhes />} />
          </Routes>
        </div>
        <Outlet />
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
