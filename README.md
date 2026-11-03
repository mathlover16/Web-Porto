# Portofolio Prayuda Zaky Al Mahdi

Website portofolio pribadi untuk menampilkan profil, pengalaman, layanan, keahlian, proyek, dan informasi kontak Prayuda Zaky Al Mahdi.

## Website

Website dipublikasikan melalui GitHub Pages:

**[https://mathlover16.github.io/Web-Porto/](https://mathlover16.github.io/Web-Porto/)**

Untuk menerbitkan website melalui GitHub Pages:

1. Buka [Settings → Pages](https://github.com/mathlover16/Web-Porto/settings/pages).
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `master` dan folder `/(root)`, lalu simpan.

Setelah itu, setiap push ke branch `master` akan memperbarui website secara otomatis. Deployment pertama mungkin memerlukan beberapa menit.

## Fitur

- Halaman profil dengan navigasi ke setiap bagian.
- Bagian tentang, pengalaman, layanan, keahlian, proyek, testimoni, dan kontak.
- Galeri proyek dengan lightbox.
- Accordion layanan dan animasi saat halaman digulir.
- Tata letak responsif untuk berbagai ukuran layar.

## Teknologi

- HTML5 dan CSS3
- Bootstrap
- JavaScript dan jQuery
- GSAP dan ScrollTrigger
- Swiper
- Magnific Popup
- Remix Icon

Library frontend disertakan di dalam repositori. Google Fonts (Inter) dimuat dari Google Fonts, sehingga koneksi internet diperlukan untuk menampilkan font tersebut.

## Menjalankan secara lokal

1. Clone repositori:

   ```bash
   git clone https://github.com/mathlover16/Web-Porto.git
   cd Web-Porto
   ```

2. Buka `version-5.html` di browser, atau jalankan server lokal:

   ```bash
   python -m http.server 8000
   ```

3. Buka [http://localhost:8000/](http://localhost:8000/) untuk diarahkan ke halaman portofolio.

Tidak diperlukan proses build atau instalasi package.

## Struktur proyek

```text
.
├── css/                 # Bootstrap, stylesheet utama, dan tema warna
├── icon-fonts/          # Font ikon Remix Icon
├── img/                 # Foto profil, aset skill, dan gambar proyek
├── js/                  # Library dan script interaksi website
├── video/               # Aset video
├── index.html           # Redirect untuk alamat GitHub Pages
├── version-5.html       # Halaman utama portofolio
└── README.md
```

## Kustomisasi

- Ubah konten dan tautan pada `version-5.html`.
- Sesuaikan tata letak dan gaya di `css/main.css`.
- Simpan aset gambar atau video di folder `img/` atau `video/`, lalu perbarui referensinya di HTML.

Formulir kontak menggunakan [FormSubmit](https://formsubmit.co/) untuk meneruskan pesan ke email pemilik situs. Pada pengiriman pertama, pemilik harus menyetujui email aktivasi dari FormSubmit sebelum pesan dapat diterima. FormSubmit memproses data yang dikirim melalui formulir.
