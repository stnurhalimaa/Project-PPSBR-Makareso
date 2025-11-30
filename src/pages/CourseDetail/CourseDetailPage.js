import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const COURSE_DATA = {
  1: {
    title: 'Handphone',
    courseImages: [
      '/assets/WhatsApp Image 2025-11-17 at 12.26.18.jpeg',
      '/assets/WhatsApp Image 2025-11-17 at 12.27.04.jpeg',
      '/assets/IMG-20251112-WA0006.jpg'
    ],
    description: 'Pelatihan perbaikan handphone dari dasar hingga lanjutan: hardware, software, flashing, dan soldering.',
    fullPdfUrl: '/assets/Modul/MODUL HANDPHONE MAKKARESO.pdf',
    modules: [
      { id: 'hp-1', title: 'MODUL 1 – Menerapkan Basic Electronik', description: 'Hukum Ohm, resistor, kapasitor, transistor, multimeter.' },
      { id: 'hp-2', title: 'MODUL 2 – Menerapkan Komponen dan Bagian-bagian Handphone', description: 'PCB, IC Power, CPU, eMMC, LCD, baterai, kamera.' },
      { id: 'hp-3', title: 'MODUL 3 – Menganalisis & Memperbaiki Kerusakan Handphone (Hardware & Software)', description: 'Diagnosis mati total, sinyal hilang, hang, bootloop.' },
      { id: 'hp-4', title: 'MODUL 4 – Memperbaiki Kerusakan Handphone (Hardware & Software)', description: 'Ganti IC, jumper, flashing, unbrick.' },
      { id: 'hp-5', title: 'MODUL 5 – Pengenalan Software Handphone', description: 'Odin, SP Flash Tool, Miracle, UFI Box, Chimera.' },
    ]
  },
  2: {
    title: 'Otomotif',
    courseImages: [
      '/assets/WhatsApp Image 2025-11-16 at 20.01.25.jpeg',
      '/assets/WhatsApp Image 2025-11-16 at 20.00.23.jpeg',
      '/assets/WhatsApp Image 2025-11-16 at 20.00.48.jpeg'
    ],
    description: 'Pelatihan perawatan dan perbaikan kendaraan roda dua & empat: mesin, kelistrikan, dan overhaul.',
    fullPdfUrl: '/assets/Modul/MODUL OTOMOTIF MAKKARESO.pdf',
    modules: [
      { id: 'oto-1', title: 'MODUL 1 - Pengenalan Alat dan Bahan', description: 'Kunci pas, dongkrak, scanner OBD, multimeter.' },
      { id: 'oto-2', title: 'MODUL 2 - Pengenalan Motor 2 Tak dan 4 Tak', description: 'Siklus kerja, komponen utama, perbedaan.' },
      { id: 'oto-3', title: 'MODUL 3 - Pengenalan Katup pada Mobil dan Motor', description: 'Katup in/ex, timing belt, klep.' },
      { id: 'oto-4', title: 'MODUL 4 - Sistem Bahan Bakar dan Pengapian', description: 'Karburator, injeksi, CDI, ECU.' },
      { id: 'oto-5', title: 'MODUL 5 - Bongkar Pasang Mobil dan Motor', description: 'Diagnosis sistem dengan scanner.' },
      { id: 'oto-6', title: 'MODUL 6 - Sistem Pengecetan & Dempul', description: 'Cat semprot, dempul bodi, polishing.' },
      { id: 'oto-7', title: 'MODUL 7 - Bongkar Pasang Mesin & Las', description: 'Overhaul mesin, las karoseri.' },
      { id: 'oto-8', title: 'MODUL 8 - OH Mesin & Las Spesifik', description: 'Overhaul mesin diesel, las MIG/TIG.' },
    ]
  },
  3: {
    title: 'Tata Rias',
    courseImages: [
      '/assets/WhatsApp Image 2025-11-17 at 12.30.50 (1).jpeg',
      '/assets/WhatsApp Image 2025-11-17 at 12.29.37.jpeg',
      '/assets/WhatsApp Image 2025-11-17 at 12.30.50.jpeg'
    ],
    description: 'Pelatihan tata rias profesional: perawatan rambut, facial, make up natural hingga pesta.',
    fullPdfUrl: '/assets/Modul/MODUL TATA RIAS MAKKARESO.pdf',
    modules: [
      { id: 'tr-1', title: 'MODUL 1 - Pengenalan Alat dan Bahan', description: 'Sisir, hair dryer, foundation, brush set.' },
      { id: 'tr-2', title: 'MODUL 2 - Cuci Rambut & Kebersihan Wajah', description: 'Keramas salon, double cleansing.' },
      { id: 'tr-3', title: 'MODUL 3 - Creambath & Hair Spa', description: 'Masker rambut, pijat kepala.' },
      { id: 'tr-4', title: 'MODUL 4 - Penggeritingan Rambut', description: 'Digital perm, smoothing, rebonding.' },
      { id: 'tr-5', title: 'MODUL 5 - Pewarnaan Rambut', description: 'Bleaching, cat rambut, perawatan pasca.' },
      { id: 'tr-6', title: 'MODUL 6 - Pemotongan Rambut Dasar', description: 'Bob, layer, shaggy.' },
      { id: 'tr-7', title: 'MODUL 7 - Facial Wajah', description: 'Ekstraksi komedo, masker wajah.' },
      { id: 'tr-8', title: 'MODUL 8 - Make Up Natural', description: 'No makeup makeup look.' },
      { id: 'tr-9', title: 'MODUL 9 - Make Up Pesta & Korektif', description: 'Contouring, smokey eyes.' },
      { id: 'tr-10', title: 'MODUL 10 - Blow, Catok & Sterilisasi', description: 'Blow dry, curling iron, autoclave.' },
    ]
  },
  4: {
    title: 'Penjahitan',
    courseImages: [
        '/assets/IMG_6340.jpg',
        '/assets/IMG_5950.JPG',
        '/assets/IMG_6342.jpg',
    ],
    description: 'Pelatihan menjahit dari nol: pola dasar, gunting kain, hingga finishing pakaian jadi.',
    fullPdfUrl: '/assets/Modul/MODUL PENJAHITAN MAKKARESO.pdf',
    modules: [
        { id: 'jahit-1',  title: 'MODUL 1 – Pengenalan Alat dan Bahan Penjahitan', 
        description: 'Mengenal mesin jahit, gunting kain, jarum, benang, pendedel, kapur jahit, dan perlengkapan lainnya.' },
        { id: 'jahit-2',  title: 'MODUL 2 – Teknik Pengukuran Badan', 
        description: 'Cara mengukur lingkar dada, pinggang, pinggul, panjang lengan, bahu, dan bagian tubuh lainnya dengan benar.' },
        { id: 'jahit-3',  title: 'MODUL 3 – Pembuatan Pola Dasar', 
        description: 'Membuat blok pola badan, lengan, rok, dan dasar-dasar pola lainnya.' },
        { id: 'jahit-4',  title: 'MODUL 4 – Perubahan Pola Kecil', 
        description: 'Penyesuaian kecil pada pola dasar untuk variasi model sederhana.' },
        { id: 'jahit-5',  title: 'MODUL 5 – Perubahan Pola Besar', 
        description: 'Modifikasi pola besar untuk model-model khusus (princess seam, empire line, dll).' },
        { id: 'jahit-6',  title: 'MODUL 6 – Perubahan Pola Kerah', 
        description: 'Berbagai jenis kerah: kerah shanghai, kerah kemeja, kerah sailor, kerah peter pan, dll.' },
        { id: 'jahit-7',  title: 'MODUL 7 – Pembuatan Pola Badan dan Perubahannya', 
        description: 'Detail pola badan wanita dan pria serta teknik perubahan bentuk.' },
        { id: 'jahit-8',  title: 'MODUL 8 – Pembuatan Pola Lengan', 
        description: 'Pola lengan pendek, lengan panjang, lengan balon, lengan raglan, dan lengan kimono.' },
        { id: 'jahit-9',  title: 'MODUL 9 – Pembuatan Pola Baju/Blus', 
        description: 'Pola blus wanita dengan berbagai variasi lengan dan kerah.' },
        { id: 'jahit-10', title: 'MODUL 10 – Pembuatan Pola Rok', 
        description: 'Rok lurus, rok A-line, rok duyung, rok lipit, rok span, dan rok maxi.' },
        { id: 'jahit-11', title: 'MODUL 11 – Pembuatan Pola Celana', 
        description: 'Pola celana panjang, celana pendek, celana kulot, dan celana palazzo.' },
        { id: 'jahit-12', title: 'MODUL 12 – Pembuatan Pola Gamis', 
        description: 'Pola gamis modern, gamis syar’i, gamis dengan variasi lengan dan kerah.' },
        { id: 'jahit-13', title: 'MODUL 13 – Pembuatan Pola Kebaya / Baju Pesta', 
        description: 'Pola kebaya encim, kebaya modern, kebaya kutubaru, dan kebaya brokat.' },
        { id: 'jahit-14', title: 'MODUL 14 – Teknik Menggunting Kain', 
        description: 'Cara menggunting kain sesuai pola, menghemat bahan, dan menghindari kesalahan.' },
        { id: 'jahit-15', title: 'MODUL 15 – Teknik Mengobras Kain', 
        description: 'Penggunaan mesin obras, teknik obras rapi, dan finishing tepi kain.' },
        { id: 'jahit-16', title: 'MODUL 16 – Teknik Menjahit', 
        description: 'Jahitan lurus, jahitan zig-zag, pasang resleting, pasang kancing, dan teknik jahit rapi.' },
        { id: 'jahit-17', title: 'MODUL 17 – Penyelesaian Pakaian dan Finishing', 
        description: 'Pemasangan kancing, lubang kancing, obras, setrika uap, dan quality control produk jadi.' },
    ]
  }
};

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const foundCourse = COURSE_DATA[id];
    setTimeout(() => {
      setCourse(foundCourse);
      setIsLoading(false);
    }, 300);
  }, [id]);

  const handleBack = () => navigate('/courses');

  if (isLoading) return <div style={{textAlign:'center', padding:'50px', color:'white'}}>Loading detail course...</div>;
  if (!course) return <div style={{textAlign:'center', padding:'50px', color:'white'}}>Course tidak ditemukan! <button onClick={handleBack}>Kembali</button></div>;

  return (
    <div className="course-detail-page detail-page-wrapper">
        <CourseDetail
        courseName={course.title}
        courseImages={course.courseImages}
        description={course.description}
        modules={course.modules}
        fullPdfUrl={course.fullPdfUrl}
        />

        {/* TOMBOL KEMBALI DI TENGAH BAWAH */}
        <div className="back-button-container">
        <button className="back-btn" onClick={handleBack}>
            Kembali ke Daftar Course
        </button>
        </div>
    </div>
    );
};

export default CourseDetailPage;