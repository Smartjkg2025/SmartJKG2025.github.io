// ==========================================================
//  DATA AWAL (SEED) — Desa Jangkang
//  Dipakai admin.html untuk "Impor Data Awal",
//  dan index.html sebagai fallback sebelum Firebase aktif.
// ==========================================================

const DEFAULT_SETTINGS = {
  siteTitle: "ADM Desa Jangkang",
  heroTitle: "Selamat Datang di Portal Digital Desa Jangkang",
  heroHighlight: "Portal Digital",
  heroSubtitle: "Satu \u201clawang\u201d (pintu) akses untuk seluruh tautan layanan, perencanaan, administrasi, dan arsip digital Pemerintahan Desa di Era Digitalisasi.",
  marquee: "Selamat datang di Landing Page Desa Jangkang \u2014 situs ini dibuat guna menjadi lawang/pintu akses link/situs yang bertujuan merangkum banyaknya tautan di lingkungan Pemerintahan Desa pada Era Digitalisasi.",
  footer: "\u00a9 2024 Desa Jangkang \u2014 Kec. Dendang, Kab. Belitung Timur."
};

const DEFAULT_CATEGORIES = [
  { id: "cat-official", name: "Menu Official & Plan",  icon: "fa-rocket",      color1: "#60a5fa", color2: "#2563eb", order: 1 },
  { id: "cat-rencana",  name: "Perencanaan, Penganggaran & Pelaporan", icon: "fa-chart-line", color1: "#34d399", color2: "#059669", order: 2 },
  { id: "cat-refdata",  name: "Referensi Data",        icon: "fa-database",    color1: "#a78bfa", color2: "#7c3aed", order: 3 },
  { id: "cat-admum",    name: "Administrasi Umum",     icon: "fa-folder-open", color1: "#fbbf24", color2: "#d97706", order: 4 },
  { id: "cat-aplikasi", name: "Aplikasi yang Dimandatkan", icon: "fa-cubes",   color1: "#22d3ee", color2: "#0891b2", order: 5 },
  { id: "cat-arsip",    name: "Arsip Digital",         icon: "fa-box-archive", color1: "#fb7185", color2: "#e11d48", order: 6 }
];

const DEFAULT_LINKS = [
  // ── Menu Official & Plan ──
  { categoryId: "cat-official", title: "Website Resmi Desa Jangkang", url: "http://jangkang-beltim.desa.id/", icon: "fa-globe", desc: "Situs resmi desa", order: 1 },
  { categoryId: "cat-official", title: "Login Admin Website", url: "https://website.desa.id/cms/login", icon: "fa-right-to-bracket", desc: "Panel administrator CMS desa.id", order: 2 },
  { categoryId: "cat-official", title: "Peta Interaktif Desa Jangkang", url: "PetaDesa.html", icon: "fa-map", desc: "Halaman lokal (file)", order: 3 },

  // ── Perencanaan, Penganggaran & Pelaporan ──
  { categoryId: "cat-rencana", title: "NgusulBee", url: "https://smartjkg2026.github.io/NgusulBee/index.html", icon: "fa-clipboard-check", desc: "Aplikasi aspirasi masyarakat", order: 1 },
  { categoryId: "cat-rencana", title: "Aplikasi Perencanaan Desa", url: "https://www.appsheet.com/start/6c0f79a2-559b-485a-b754-eb039194a092", icon: "fa-clipboard-list", desc: "AppSheet", order: 2 },
  { categoryId: "cat-rencana", title: "Perencanaan APBDes TA. 2025 Perubahan", url: "https://docs.google.com/spreadsheets/d/1w35KyKMLov6mm0xKTC5bBF9ezOmCw5LpVOHQgsh6BtY/edit?gid=1280554104#gid=1280554104", icon: "fa-file-excel", desc: "Google Sheets", order: 3 },
  { categoryId: "cat-rencana", title: "Rekap Silpa Akhir Tahun 2025", url: "https://docs.google.com/spreadsheets/d/103Esh2Q86-qOTYNisP7LQrhWgEAiwNnQY1rxhDfDzv0/edit?usp=sharing", icon: "fa-file-excel", desc: "Google Sheets", order: 4 },
  { categoryId: "cat-rencana", title: "Perencanaan APBDes TA. 2026", url: "https://docs.google.com/spreadsheets/d/13owUg-3aXOE5yBB4uCMdDOSRjsMO0GKtCi8RWZAn2aY/edit?usp=sharing", icon: "fa-file-excel", desc: "Google Sheets", order: 5 },
  { categoryId: "cat-rencana", title: "Perencanaan APBDes TA. 2027", url: "https://docs.google.com/spreadsheets/d/167EqrhZo2frgairTQBkafqGfa3YqE6vaUDQMEBTa70Q/edit?usp=sharing", icon: "fa-file-excel", desc: "Google Sheets", order: 6 },
  { categoryId: "cat-rencana", title: "Folder RAB Draft Awal Kegiatan 2027 (Kasi/Kaur)", url: "https://drive.google.com/drive/folders/1Lb7PnHM1VqWRLXuoqzsVkSb7ZgLSADYn", icon: "fa-folder", desc: "Google Drive", order: 7 },
  { categoryId: "cat-rencana", title: "Laporan Penyelenggaraan Pemdes 2024", url: "LPD_2024.html", icon: "fa-file-lines", desc: "Halaman lokal (file)", order: 8 },

  // ── Referensi Data ──
  { categoryId: "cat-refdata", title: "Visual Data Dukcapil", url: "https://gis.dukcapil.kemendagri.go.id/peta/", icon: "fa-map-location-dot", desc: "Kemendagri", order: 1 },
  { categoryId: "cat-refdata", title: "Profil - Sistem Informasi Desa", url: "https://sid.kemendesa.go.id/profile/", icon: "fa-circle-info", desc: "Kemendesa", order: 2 },
  { categoryId: "cat-refdata", title: "Template SPJ Desa", url: "https://drive.google.com/drive/folders/155tDEdisDKg7eNc2rME5iYrYbOROEm8o", icon: "fab fa-google-drive", desc: "Google Drive", order: 3 },
  { categoryId: "cat-refdata", title: "SHS (Standar Harga Satuan)", url: "https://drive.google.com/file/d/1cuAEfeXypXkuCQEpAnJkxEZAuxgJPyVJ/view", icon: "fa-file-pdf", desc: "PDF - Google Drive", order: 4 },

  // ── Administrasi Umum ──
  { categoryId: "cat-admum", title: "Adm Perdes dan Perkades", url: "https://docs.google.com/spreadsheets/d/1C3EDQ0iQ8p3ussn1UwZzAjvWUmc2P5DhnwKfQX_Rr2I/edit?usp=sharing", icon: "fa-file-lines", desc: "Google Sheets", order: 1 },
  { categoryId: "cat-admum", title: "Nomor Surat Keluar", url: "https://onedrive.live.com/edit?id=40E8730762E22A25!106&resid=40E8730762E22A25!106&ithint=file%2cxlsx&authkey=!ANkKt503BbC8h2U&wdo=2&cid=40e8730762e22a25", icon: "fa-file-excel", desc: "OneDrive Excel", order: 2 },
  { categoryId: "cat-admum", title: "Nomor Undangan", url: "https://1drv.ms/x/c/2f0d3b227cba522d/ES1SunwiOw0ggC95AAAAAAABhuDJEeXmO56-F_v-5nUNxQ?e=OPQcTF", icon: "fa-file-excel", desc: "OneDrive Excel", order: 3 },
  { categoryId: "cat-admum", title: "Nomor Berita Acara", url: "https://onedrive.live.com/edit?cid=2f0d3b227cba522d&id=2F0D3B227CBA522D!124&ithint=file%2Cxlsx&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy8yZjBkM2IyMjdjYmE1MjJkL0VTMVN1bndpT3cwZ2dDOThBQUFBQUFBQnliQzlMdUN6OGhveXlYZU0wOXZ3S2c_ZT1HcG1QZ1E&resid=2F0D3B227CBA522D!124&wdo=2", icon: "fa-file-excel", desc: "OneDrive Excel", order: 4 },
  { categoryId: "cat-admum", title: "Nomor SPPD/SPT", url: "https://onedrive.live.com/edit?cid=2f0d3b227cba522d&id=2F0D3B227CBA522D!s6821b0c0030d41cca656e7a5a2cafd03&ithint=file%2Cxlsx&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy8yZjBkM2IyMjdjYmE1MjJkL0VjQ3dJV2dOQTh4QnBsYm5wYUxLX1FNQkRFV1JMeHVEQWcwMXdmUDZncTlocUE_ZT1QdFk5RzA&resid=2F0D3B227CBA522D!s6821b0c0030d41cca656e7a5a2cafd03&wdo=2", icon: "fa-file-excel", desc: "OneDrive Excel", order: 5 },
  { categoryId: "cat-admum", title: "LMS Pamong Desa", url: "https://pamongdesa.kemendagri.go.id/home", icon: "fa-graduation-cap", desc: "Pelatihan digital aparatur desa", order: 6 },

  // ── Aplikasi yang Dimandatkan ──
  { categoryId: "cat-aplikasi", title: "SRIKANDI - Surat Elektronik", url: "https://srikandi.arsip.go.id/auth/login", icon: "fa-envelope", desc: "Arsip Nasional RI", order: 1 },
  { categoryId: "cat-aplikasi", title: "SELINA - Dukcapil", url: "https://selina.beltim.go.id/signin", icon: "fa-id-card", desc: "Kab. Belitung Timur", order: 2 },
  { categoryId: "cat-aplikasi", title: "SDGs Desa", url: "https://dashboard-sdgs.kemendesa.go.id/", icon: "fa-bullseye", desc: "Kemendesa", order: 3 },
  { categoryId: "cat-aplikasi", title: "SID Kemendesa", url: "https://sid.kemendesa.go.id/profile", icon: "fa-circle-info", desc: "Kemendesa", order: 4 },
  { categoryId: "cat-aplikasi", title: "ID (Indeks Desa)", url: "https://id.kemendesa.go.id/", icon: "fa-fingerprint", desc: "Kemendesa", order: 5 },
  { categoryId: "cat-aplikasi", title: "SIPD RI", url: "https://sipd-ri.kemendagri.go.id/auth/login", icon: "fa-desktop", desc: "Kemendagri", order: 6 },
  { categoryId: "cat-aplikasi", title: "PRODESKEL", url: "https://prodeskel.binapemdes.kemendagri.go.id/app_Login/", icon: "fa-table-list", desc: "Kemendagri", order: 7 },
  { categoryId: "cat-aplikasi", title: "EPDESKEL", url: "https://epdeskel.binapemdes.kemendagri.go.id/app_Login/", icon: "fa-rectangle-list", desc: "Kemendagri", order: 8 },
  { categoryId: "cat-aplikasi", title: "SIPADES.V3", url: "https://sipades.beltim.go.id/", icon: "fa-coins", desc: "Kab. Belitung Timur", order: 9 },
  { categoryId: "cat-aplikasi", title: "SIMPOR", url: "https://simpor.beltim.go.id/login", icon: "fa-truck", desc: "Kab. Belitung Timur", order: 10 },
  { categoryId: "cat-aplikasi", title: "eHDW", url: "https://ehdw.kemendesago.id/app-pendataan/#/", icon: "fa-database", desc: "Cek kembali URL asli", order: 11 },
  { categoryId: "cat-aplikasi", title: "Teras Layanan APIP", url: "https://beltim.go.id/login", icon: "fa-shield-halved", desc: "Kab. Belitung Timur", order: 12 },
  { categoryId: "cat-aplikasi", title: "JAGA DESA", url: "https://jagadesa.kejaksaan.go.id/login", icon: "fa-gavel", desc: "Kejaksaan RI", order: 13 },

  // ── Arsip Digital ──
  { categoryId: "cat-arsip", title: "Kumpulan Peraturan", url: "https://peraturan.go.id/", icon: "fa-book", desc: "JDIH Nasional", order: 1 },
  { categoryId: "cat-arsip", title: "JDIH Kab. Belitung Timur", url: "https://jdih.belitungtimurkab.go.id/", icon: "fa-building-columns", desc: "Kab. Belitung Timur", order: 2 },
  { categoryId: "cat-arsip", title: "Arsip PERDES", url: "logArsipPerdes.html", icon: "fa-box-archive", desc: "Halaman lokal (file)", order: 3 },
  { categoryId: "cat-arsip", title: "Arsip PERKADES", url: "commingsoon.html", icon: "fa-hourglass-half", desc: "Segera hadir", order: 4 },
  { categoryId: "cat-arsip", title: "Arsip SK", url: "logArsipSK.html", icon: "fa-file-signature", desc: "Halaman lokal (file)", order: 5 },
  { categoryId: "cat-arsip", title: "Arsip Surat", url: "logArsipSurat.html", icon: "fa-envelope-open-text", desc: "Halaman lokal (file)", order: 6 },
  { categoryId: "cat-arsip", title: "Arsip BA", url: "commingsoon.html", icon: "fa-hourglass-half", desc: "Segera hadir", order: 7 }
];