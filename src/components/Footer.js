import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Teks Kontak Admin */}
        <p className="footer-heading">Kontak Admin</p>
        
        <div className="footer-links">
          {/* Tautan Instagram */}
          <a href="https://www.instagram.com/ppsbr_makkareso?igsh=ZHAycjk2eWR3Mmcx" className="footer-link">
            <img
              src="/assets/icons8-instagram-logo-100.png"
              alt="Instagram"
              className="footer-icon"
            />
            Instagram
          </a>
          
          {/* Tautan Gmail/Email */}
          <a href="psbrmakkaresomaros@gmail.com" className="footer-link">
            {/* Ganti ikon jika Anda memiliki ikon Gmail yang berbeda */}
            <img
              src="/assets/icons8-email-100.png" 
              alt="Gmail"
              className="footer-icon"
            />
            Gmail
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 PPSBRMakkreso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;