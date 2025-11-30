import React from 'react';
import { Link } from 'react-router-dom'; // <--- Tambah Import Link
import './CourseCard.css';

// Menerima courseId sebagai prop
const CourseCard = ({ image, title, description, courseId }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Menggunakan Link untuk navigasi */}
        <Link to={`/course/${courseId}`} className="course-btn-link">
          <button className="course-btn">Lihat Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;