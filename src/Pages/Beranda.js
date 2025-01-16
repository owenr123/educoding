import React from 'react';
import '../Styles/Beranda.css';
import App from '../Assets/App.jpg';
import Wallpaper1 from '../Assets/Introduction1.jpg';
import Wallpaper2 from '../Assets/Introduction2.jpg';
import Wallpaper3 from '../Assets/Rectangle_pictures.jpg';
import Footer from '../Components/Footer';

const Beranda = () => {
  return (
    <div className="beranda">

      <header className="header">
        <div className="header-content">
          <h1>
            Buka Potensi Kodingmu: <br /> Kuasai Diri dengan Pembelajaran Online!
          </h1>
          <p>Lengkap dan praktis</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.namapaket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt="Google Play Store"
              className="google-play-button"
            />
          </a>
        </div>
        <img src={App} alt="home" className="header-image" />
      </header>

      <section className="introduction1">
        <div className="introduction-content">
          <h3>Lengkap</h3>
          <h1>Kelas dan materi tersedia</h1>
          <p>Tersedia beragam jenis kategori kelas dan materi untuk dipilih</p>
          <a href="#" className="introduction-button">
            Unduh Sekarang
          </a>
        </div>
        <img src={Wallpaper1} alt="home" className="introduction-img" />
      </section>

      <section className="introduction2">
        <img src={Wallpaper2} alt="home" className="introduction-img" />
        <div className="introduction-content">
          <h3>Praktis</h3>
          <h1>Mudah dan nyaman digunakan</h1>
          <p>Tampilan antar muka yang mudah digunakan dan beragam opsi</p>
          <a href="#" className="introduction-button">
            Unduh Sekarang
          </a>
        </div>
      </section>

      <section className="rectangle-section">
        <div className="rectangle-content">
          <h3>Promo Kelas</h3>
          <h1>Manfaatkan diskon pembelajaran kelas dari kami</h1>
          <a href="#" className="rectangle-button">
            Unduh Sekarang
          </a>
        </div>
        <img src={Wallpaper3} alt="home" className="rectangle-img" /> 
      </section>

      <div className="cta-section">
        <h1>Temukan kelas pembelajaran anda disini</h1>
        <a href="#" className="cta-button">Unduh Sekarang</a>
      </div>

      <div className="class-section">
        <h1>Beragam kelas yang tersedia saat ini</h1>
        <div className="class">
          <div className="artificial">
            <div className="class-content">
              <h3>Artificial Intelligence</h3>
              <a href="#" className="register-button">Daftar Sekarang</a>
            </div>
          </div>
          <div className="flutter">
            <div className="class-content">
              <h3>Flutter Fundamental</h3>
              <a href="#" className="register-button">Daftar Sekarang</a>
            </div>
          </div>
          <div className="web">
            <div className="class-content">
              <h3>Web Programmer</h3>
              <a href="#" className="register-button">Daftar Sekarang</a>
            </div>
          </div>
          <div className="backend">
            <div className="class-content">
              <h3>Web Programmer</h3>
              <a href="#" className="register-button">Daftar Sekarang</a>
            </div>
          </div>
        </div>
      </div>

      <section className="ending-section">
        <div className="ending-content">
          <h1>
            Belum punya aplikasi eduCoding? <br /> Dapatkan sekarang
          </h1>
          <p>Unduh Aplikasi</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.namapaket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
              alt="Google Play Store"
              className="google-play-button"
            />
          </a>
        </div>
        <img src={App} alt="home" className="ending-image" />
      </section>

      <Footer />
    </div>
  );
};

export default Beranda;
