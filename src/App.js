import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Courses from './pages/Courses/Courses';
import ContactAdmin from './pages/ContactAdmin/ContactAdmin';
import CourseDetailPage from './pages/CourseDetail/CourseDetailPage';  // Menambahkan import halaman detail

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetailPage />} /> {/* Rute untuk detail course */}
          <Route path="/contact" element={<ContactAdmin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
