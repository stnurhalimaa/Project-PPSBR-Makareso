import React, { useState } from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalContent, setModalContent] = useState(null);

    const images = [
        "/assets/Gambar WhatsApp 2025-11-21 pukul 17.49.39_d52fb5f5.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.08_91ac4b94.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.07_4d379c2c.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.06_1c8b018c.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.01_c1fb30ea.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.04_d1b963e5.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.09_7e8e0253.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.05_335c4390.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.09_fbe61964.jpg",
        "/assets/Gambar WhatsApp 2025-11-21 pukul 15.40.09_d6100188.jpg",
        "/assets/IMG_0979.jpg",
    ];

    const handleNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const handlePrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    const openModal = (type) => {
        if (type === 'Sejarah') {
            setModalContent({
                title: "Sejarah PPSBR Makkareso",
                content: (
                    <div className="modal-text-content">
                        <p>Pusat Pelayanan Sosial Bina Remaja (PPSBR) “Makkareso” Maros adalah salah satu Unit Pelaksana Teknis Dinas (UPTD) Dinas Sosial Provinsi Sulawesi Selatan yang menangani permasalahan anak khususnya anak remaja terlantar putus sekolah, anak jalanan dan anak yang berhadapan dengan hukum memiliki program untuk menggali, membina, mengembangkan, meningkatkan dan memantapkan potensi dan sumber daya anak remaja terlantar putus sekolah dengan memberikan pelayanan kesejahteraan sosial, bimbingan sosial, bimbingan mental dan fisik serta keterampilan kerja.</p>
                        
                        <p>Pusat Pelayanan Sosial Bina Remaja (PPSBR) “Makkareso” Maros dibangun pada <strong>Tahun 1975</strong> dan mulai dioperasionalkan pada <strong>Tanggal 21 Juni 1979</strong> dengan nama <strong>Panti Karya Taruna (PKT)</strong> sebagai salah satu Unit Pelaksana Teknis Kantor Wilayah Departemen Sosial Propinsi Sulawesi Selatan.</p>
                        
                        <ul className="history-timeline">
                            <li><strong>1981</strong> — Panti Karya Taruna (PKT) berubah nama menjadi Panti Penyantunan Anak (PPA) Maros.</li>
                            <li><strong>1995</strong> — Berdasarkan SK Dirjen Bina Kesos No. 18/DIR/KPTS/V/1995, nama PPA Maros diubah menjadi Panti Sosial Bina Remaja (PSBR) “Makkareso” Maros.</li>
                            <li><strong>2000</strong> — Setelah otonomi daerah, melalui Keputusan Gubernur Sulsel No. 168 Tahun 2001, menjadi Unit Pelaksana Teknis Dinas PSBR “Makkareso” Maros.</li>
                            <li><strong>2009</strong> — Melalui SK Gubernur Sulsel No. 37 Tahun 2009 tanggal 18 Februari 2009, resmi menjadi <strong>Pusat Pelayanan Sosial Bina Remaja (PPSBR) Makkareso</strong>.</li>
                        </ul>
                    </div>
                )
            });
        }
        else if (type === 'Visi Misi') {
            setModalContent({
                title: "Visi dan Misi",
                content: (
                    <div className="modal-text-content">
                        <h4 className="section-title">VISI</h4>
                        <p className="visi-highlight">
                            Terwujudnya kemandirian anak remaja yang mengalami ketidakberfungsian sosial yang kreatif, terampil, dan produktif di Sulawesi Selatan.
                        </p>
                        
                        <h4 className="section-title">MISI</h4>
                        <ul className="misi-list">
                            <li>Membina, mengembangkan dan meningkatkan potensi anak dan remaja</li>
                            <li>Mengembangkan keterampilan</li>
                            <li>Mencegah anak remaja dari ketidakberfungsian sosial</li>
                            <li>Mengembangkan prakarsa dan peranan masyarakat</li>
                        </ul>
                    </div>
                )
            });
        }
        else if (type === 'Persyaratan') {
            setModalContent({
                title: "Persyaratan Peserta",
                content: (
                    <div className="persyaratan-container">
                        <h3 className="section-title">Kriteria Peserta</h3>
                        <div className="criteria-grid">
                            <ul>
                                <li>Anak Remaja Terlantar, Anak Berhadapan dengan Hukum, Anak Jalanan, Anak Korban Trafficking & Tindak Kekerasan, serta Anak Putus Sekolah SD/SMP/SMA yang Bisa Baca Tulis</li>
                            </ul>
                            <ul>
                                <li>Usia 18–21 Tahun dan Belum Menikah</li>
                            </ul>
                            <ul>
                                <li>Sehat Jasmani dan Rohani</li>
                            </ul>
                        </div>

                        <h3 className="section-title">Persyaratan Administrasi</h3>
                        <div className="criteria-grid">
                            <ul>
                                <li>Fotokopi Kartu Keluarga (KK)</li>
                            </ul>
                            <ul>
                                <li>Surat Rekomendasi dari Dinas Sosial Kabupaten/Kota Setempat</li>
                            </ul>
                        </div>

                        <h3 className="section-title">Perlengkapan yang Harus Dibawa</h3>
                        <div className="perlengkapan-grid">
                            <div className="perlengkapan-item">
                                <h4>Seragam Resmi</h4>
                                <ul>
                                    <li>Baju Putih + Celana/Rok Warna Gelap</li>
                                </ul>
                            </div>
                            <div className="perlengkapan-item">
                                <h4>Pakaian Sehari-hari</h4>
                                <ul>
                                    <li>Pakaian santai & perlengkapan sholat</li>
                                </ul>
                            </div>
                            <div className="perlengkapan-item">
                                <h4>Alas Kaki</h4>
                                <ul>
                                    <li>Sepatu olahraga</li>
                                    <li>Sandal jepit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            });
        }
    };

    const closeModal = () => setModalContent(null);

    return (
        <div className="dashboard">
            <div className="dashboard-content-wrapper">
                {/* SEMUA BAGIAN INI TETAP 100% SAMA — TIDAK BERUBAH */}
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                    <p>Selamat datang di portal informasi dan dokumentasi</p>
                    <div className="carousel-container">
                        <button className="carousel-btn prev" onClick={handlePrevImage}>‹</button>
                        <img src={images[currentImageIndex]} alt="Kegiatan" className="dashboard-image" />
                        <button className="carousel-btn next" onClick={handleNextImage}>›</button>
                    </div>
                </header>

                <div className="info-cards">
                    <div className="info-card" onClick={() => openModal('Sejarah')}>
                        <div className="info-icon-wrapper">
                            <img src="/assets/icons8-history-80.png" alt="Sejarah" className="info-icon" />
                        </div>
                        <h3>Sejarah</h3>
                        <p>Pelajari sejarah dan perkembangan organisasi dari masa ke masa</p>
                    </div>
                    <div className="info-card" onClick={() => openModal('Visi Misi')}>
                        <div className="info-icon-wrapper">
                            <img src="/assets/icons8-vision-96.png" alt="Visi Misi" className="info-icon" />
                        </div>
                        <h3>Visi Misi</h3>
                        <p>Mengenal visi dan misi yang menjadi landasan organisasi</p>
                    </div>
                    <div className="info-card" onClick={() => openModal('Persyaratan')}>
                        <div className="info-icon-wrapper">
                            <img src="/assets/icons8-term-96.png" alt="Persyaratan" className="info-icon" />
                        </div>
                        <h3>Persyaratan</h3>
                        <p>Informasi lengkap mengenai persyaratan dan ketentuan yang berlaku</p>
                    </div>
                </div>

                <div className="stats">
                    <div className="stat-card"><div className="stat-text-content"><h4>Total Courses</h4><p>4</p></div><img src="/assets/icons8-course-assign-96.png" alt="" className="stat-icon"/></div>
                    <div className="stat-card"><div className="stat-text-content"><h4>Active Students</h4><p>50</p></div><img src="/assets/icons8-student-96.png" alt="" className="stat-icon"/></div>
                    <div className="stat-card"><div className="stat-text-content"><h4>Completion Rate</h4><p>85%</p></div><img src="/assets/icons8-chart-increasing-96.png" alt="" className="stat-icon"/></div>
                </div>
            </div>

            {/* MODAL CARD BESAR YANG BARU — CANTIK & SCROLLABLE */}
            {modalContent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>✕</button>
                        
                        <div className="modal-card-header">
                            <h2>{modalContent.title}</h2>
                        </div>

                        <div className="modal-card-body">
                            {modalContent.content}
                        </div>

                        <div className="modal-card-footer">
                            <button onClick={closeModal} className="modal-close-text">Tutup</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;