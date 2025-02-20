import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Beranda from './Pages/Beranda';
import TentangKami from './Pages/TentangKami';
import Kontak from './Pages/Kontak';
import Bantuan from './Pages/Bantuan';

function App() {
  return (
    <Router basename="/educoding">
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Beranda />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/bantuan" element={<Bantuan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
