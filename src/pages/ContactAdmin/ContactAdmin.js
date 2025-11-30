import React from 'react';
import './ContactAdmin.css'; // Pastikan styling berada di file ini

const ContactAdmin = () => {
  return (
    <div className="contact-admin">
      <h1>Kontak Admin</h1>
      <p>Hubungi kami untuk informasi lebih lanjut</p>

      <div className="contact-options">
        <div className="contact-option">
          <img src="/assets/icons8-gmail-144.png" alt="Gmail Icon" className="footer-icon"/>
          <h3>Email</h3>
          <p>admin@eduportal.com</p>
          {/* Button Email dengan mailto: protocol */}
          <a href="mailto:psbrmakkaresomaros@gmail.com" target='_blank' rel='noopener noreferrer'>
            <button className="contact-btn">Kirim Email</button>
          </a>
        </div>

        <div className="contact-option">
          <img src="/assets/icons8-instagram-144.png" alt="Instagram Icon" className="footer-icon"/>
          <h3>Instagram</h3>
          <p>@ppsbr_makreso</p>
          {/* Button Instagram */}
          <a href="https://www.instagram.com/ppsbr_makkareso?igsh=ZHAycjk2eWR3Mmcx" target="_blank" rel="noopener noreferrer">
            <button className="contact-btn">Kunjungi Instagram</button>
          </a>
        </div>
      </div>

    <div className="location-section">
        <h2 className="location-title">Lokasi Kami</h2>
        <div className="location-card">
          <iframe
            title="Lokasi UPT PPSBR Makkareso Maros"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.376289277552!2d119.570833614758!3d-5.050833996376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee9b1f1b1b1b1%3A0x1sQiZ1CWXitjQURm7!2sUPT%20PPSBR%20Makkareso%20Maros!5e0!3m2!1sid!2sid!4v1735000000000"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="location-info">
            <h3>UPT PPSBR Makkareso Maros</h3>
            <p>Jl. Poros Makassar - Maros KM. 19, Makkareso<br />Kec. Maros Baru, Kabupaten Maros<br />Sulawesi Selatan 90551</p>
            <a 
              href="https://maps.app.goo.gl/1sQiZ1CWXitjQURm7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-open-maps"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdmin;