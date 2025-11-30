import React from 'react';
import './CourseDetail.css';

const CourseDetail = ({ courseName, courseImages = [], description, modules = [], fullPdfUrl }) => {
  return (
    <div className="course-detail">
      <h1 className="detail-page-title">Detail Course: {courseName}</h1>
      <p className="detail-page-subtitle">Pilih modul praktikum yang ingin dipelajari</p>

      <div className="course-main-card">
        <h2>{courseName}</h2>
        <div className="image-gallery-row">
          {courseImages.map((img, i) => (
            <img key={i} src={img} alt={`${courseName} ${i+1}`} className="detail-gallery-image-row" />
          ))}
        </div>
        <p className="course-description-full">{description}</p>
      </div>

      <h2 className="modules-heading">Daftar Modul Praktikum</h2>
      <div className="module-list">
        {modules.map((module) => (
          <a
            key={module.id}
            href={fullPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="module-card-link"
          >
            <div className="module-card">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <button className="module-btn">
                Baca Modul
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;