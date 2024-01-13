import React from 'react';
import '../Styles/Bantuan.css';
import Helpimg1 from '../Assets/help_img.jpg';
import { FaSearch } from 'react-icons/fa';

function Bantuan() {
  return (
    <div className="bantuan">
      <h1>How Can I Help You</h1>

      <img src={Helpimg1} alt="Help" />

      <div className="search-container">
        <button><FaSearch /></button>
        <input type="text" placeholder="Cari bantuan" />
      </div>

      <footer className="bantuan-footer">
        <p>Hak Cipta &copy; 2023 Nama Situs. Semua Hak Dilindungi.</p>
      </footer>

    </div>
  );
}

export default Bantuan;
