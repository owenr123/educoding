import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Beranda from './Pages/Beranda';
import TentangKami from './Pages/TentangKami'; // Pastikan nama komponennya sesuai

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/educoding" element={<Beranda />} />
          <Route path="/tentangkami" element={<TentangKami />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
