import React from 'react';
import '../Styles/TentangKami.css';
import Aboutimg1 from '../Assets/about_img.png';
import AboutWallpaper1 from '../Assets/About1.jpg';
import AboutWallpaper2 from '../Assets/About2.jpg';
import Aboutoptionimg from '../Assets/option.png';
import Aboutchecklistimg from '../Assets/big-check-mark.png';
import AboutWallpaper3 from '../Assets/About3.jpg';
import AboutWallpaper4 from '../Assets/About4.jpg';
import AboutWallpaper5 from '../Assets/About5.jpg';
import AboutWallpaper6 from '../Assets/About6.jpg';
import AboutWallpaper7 from '../Assets/About7.jpg';
import App from '../Assets/App.jpg';

function Tentang() {
  return (
    <div className="tentangkami">

      <div className="rectangle-header">
        <div className ="rectangle-header-content">
          <h1>Online Platform Education</h1>
          <p>Educoding platform daring edukasi yang dapat memberikan akses belajar interaktif untuk semua. 
            Dengan beragam kursus dan materi berkualitas, kami bertujuan untuk membawa revolusi dalam 
            pembelajaran daring untuk menciptakan pengalaman pembelajaran yang menarik dan mendidik, 
            memungkinkan anda untuk meraih potensi dalam dunia digital yang terus berkembang.
          </p>
          <h3>#PintarDiEduCoding</h3>
        </div>
        <img src={Aboutimg1} alt="tentangkami" className="about-img" />
      </div>

      <section className="about-introduction1">
        <div className="about-introduction-content">
          <h1>Why Online?</h1>
          <p>Platform daring dapat menyajikan materi pembelajaran dengan cara yang lebih interaktif dan menarik, 
            dengan penggunaan multimedia, kuis interaktif, diskusi online, dan lainnya. Ini dapat memperdalam 
            pemahaman siswa.
          </p>
        </div>
        <img src={AboutWallpaper1} alt="about" className="about-introduction-img" />
      </section>

      <section className="about-introduction2">
        <img src={AboutWallpaper2} alt="about" className="about-introduction-img" />
        <div className="about-introduction-content">
          <h1>What Makes Educoding Different?</h1>
          <p>Educoding mengukir perbedaan dengan pendekatan pembelajaran yang merangkul evolusi digital. 
            Kami tidak hanya sekadar platform, kami adalah pelopor perubahan dalam cara kita belajar.
          </p>
          <p>Melalui konten interaktif terdepan, kelas daring dengan pengajar berpengalaman, dan komunitas global 
            yang inspiratif, Educoding membawa revolusi edukasi ke masa depan. Kami berkomitmen untuk mempersiapkan 
            Anda menghadapi tantangan dunia digital dengan percaya diri, kreativitas, dan kecerdasan yang tajam.
          </p>
        </div>
      </section>

      <div className="about-keunggulan">
  <div className="aboutkeunggulan-content">
    <h1>Apa Keunggulan EduCoding?</h1>
    <div className="keunggulan-container">
      <div className="keunggulan-box">
        <img src={Aboutoptionimg} alt="About" />
        <h3>Lengkap</h3>
        <p>Kelas dan materi tersedia</p>
      </div>
      <div className="keunggulan-box">
        <img src={Aboutchecklistimg} alt="About" />
        <h3>Praktis</h3>
        <p>Mudah dan nyaman digunakan</p>
      </div>
    </div>
  </div>
</div>


      <div className="about-wallpaper">
        <h1>Ayo, kita belajar bersama dan berkembang bersama</h1>
        <div className="aboutwallpaper-content">

          <div className="wallpaper1">
            <img src={AboutWallpaper3} alt="About" />
            <img src={AboutWallpaper4} alt="About" />
            <img src={AboutWallpaper5} alt="About" />
          </div>

          <div className="wallpaper2">
            <img src={AboutWallpaper6} alt="About" />
            <img src={AboutWallpaper7} alt="About" />
          </div>

        </div>
      </div>

      <section className="about-ending">
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

      <footer className="footer">
        <p>Hak Cipta &copy; 2023 Nama Situs. Semua Hak Dilindungi.</p>
      </footer>

    </div>
  );
}

export default Tentang;
