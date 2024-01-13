import React from 'react';
import '../Styles/Kontak.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Contactimg1 from '../Assets/contact_img.png';

function Kontak() {
  return (
    <div className="kontak">
      <h1>Any Question</h1>
      
      <div className="kontak-container">

        <div className="kontak-content">
          <div className="kontak-item">
            <FaMapMarkerAlt />
            <p>Toraja Utara, Sulawesi Selatan <br /> Indonesia</p>
          </div>

          <div className="kontak-item">
            <FaEnvelope />
            <p>educoding@gmail.com</p>
          </div>

          <div className="kontak-item">
            <FaPhone />
            <p>+08123456</p>
          </div>
        </div>
        
        <div className="kontak-img">
          <img src={Contactimg1} alt="Contact" />
        </div>

      </div>

      <footer className="footer">
        <p>Hak Cipta &copy; 2023 Nama Situs. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default Kontak;
