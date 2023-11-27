import React from 'react';
import '../Styles/TentangKami.css';
import Aboutimg1 from '../Assets/about_img.png';
import AboutWallpaper1 from '../Assets/About1.jpg';
import AboutWallpaper2 from '../Assets/About2.jpg';

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

    </div>
  );
}

export default Tentang;
