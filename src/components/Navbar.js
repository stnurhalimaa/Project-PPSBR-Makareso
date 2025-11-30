import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      
      {/* Kiri: Logo dan Nama UPT (DIJADIKAN SATU GRUP) */}
      <div className="navbar-logo-group"> 
        <img src="/assets/Sulawesi_Selatan-removebg-preview.png" alt="Logo" width="50" />
        {/* Teks UPT di samping logo */}
        <span>UPT PPSBR Makkareso Maros</span> 
      </div>

      {/* Kanan: Links */}
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/courses">Course</Link>
        <Link to="/contact">Kontak Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;