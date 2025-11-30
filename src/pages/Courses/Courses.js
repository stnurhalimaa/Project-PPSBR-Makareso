import React from 'react';
import CourseCard from '../../components/CourseCard';
import './Courses.css';
// import { Link } from 'react-router-dom'; // <--- Hapus Link di sini

const Courses = () => {
  return (
    <div className="courses">
      <h1>Course</h1>
      <p style={{ color: 'white' }}>Jelajahi berbagai course yang tersedia</p>

      <div className="course-list">
        {/* Kirim ID yang unik ke setiap CourseCard */}
        <CourseCard
          image="/assets/WhatsApp Image 2025-11-17 at 12.27.04.jpeg" title="Handphone" description="Belajar diagnosis, bongkar pasang, solder, dan flashing sistem operasi HP." courseId="1" />
        <CourseCard
          image="/assets/WhatsApp Image 2025-11-16 at 20.00.48.jpeg" title="Otomotif" description="Belajar merawat, mendiagnosa, dan memperbaiki kendaraan serta sistem elektronik." courseId="2" />
        <CourseCard
          image="/assets/WhatsApp Image 2025-11-17 at 12.30.50 (1).jpeg" title="Tata Rias" description="Belajar ilmu koreksi bentuk wajah, pemilihan warna, dan aplikasi teknik riasan." courseId="3" />
        <CourseCard
          image="/assets/IMG_6340.jpg" title="Penjahitan" description="Belajar keterampilan dari mengukur, memotong kain, hingga menjahit produk busana." courseId="4"/>
      </div>
    </div>
  );
};

export default Courses;