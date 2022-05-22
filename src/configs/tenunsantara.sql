-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Bulan Mei 2022 pada 23.35
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tenunsantara`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `product_slug` varchar(50) NOT NULL,
  `weaving_id` int(11) NOT NULL,
  `weaving_category_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `title`, `product_slug`, `weaving_id`, `weaving_category_id`, `image`, `desc`) VALUES
(1, 'Baju Model Dress Up Ulos Bintang Maratur', 'baju-model-dress-up-ulos-bintang-maratur-1', 1, 1, 'https://storage.googleapis.com/hijup-production-sg-magazine/2020/03/2-5.png', '<p style=\\\"text-align: justify;\\\"><strong>Ulos</strong>&nbsp;atau sering juga disebut&nbsp;<strong>kain ulos</strong>&nbsp;adalah salah satu busana khas Indonesia. Ulos secara turun temurun dikembangkan oleh masyarakat&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Batak\\\" href=\\\"https://id.wikipedia.org/wiki/Batak\\\">Batak</a>,&nbsp;<a title=\\\"Sumatra Utara\\\" href=\\\"https://id.wikipedia.org/wiki/Sumatra_Utara\\\">Sumatra Utara</a>. Dari bahasa asalnya, ulos berarti&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Kain\\\" href=\\\"https://id.wikipedia.org/wiki/Kain\\\">kain</a>. Cara membuat ulos serupa dengan cara membuat&nbsp;<a title=\\\"Songket\\\" href=\\\"https://id.wikipedia.org/wiki/Songket\\\">songket</a>&nbsp;khas&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Palembang\\\" href=\\\"https://id.wikipedia.org/wiki/Palembang\\\">Palembang</a>, yaitu menggunakan&nbsp;<a title=\\\"Alat tenun bukan mesin\\\" href=\\\"https://id.wikipedia.org/wiki/Alat_tenun_bukan_mesin\\\">alat tenun bukan mesin</a>.</p></br></br><p style=\\\"text-align: justify;\\\">Warna dominan pada ulos adalah&nbsp;<a title=\\\"Merah\\\" href=\\\"https://id.wikipedia.org/wiki/Merah\\\">merah</a>,&nbsp;<a title=\\\"Hitam\\\" href=\\\"https://id.wikipedia.org/wiki/Hitam\\\">hitam</a>, dan&nbsp;<a title=\\\"Putih\\\" href=\\\"https://id.wikipedia.org/wiki/Putih\\\">putih</a>&nbsp;yang dihiasi oleh ragam tenunan dari&nbsp;<a title=\\\"Benang\\\" href=\\\"https://id.wikipedia.org/wiki/Benang\\\">benang</a>&nbsp;emas atau perak. Mulanya ulos dikenakan di dalam bentuk&nbsp;<a title=\\\"Selendang\\\" href=\\\"https://id.wikipedia.org/wiki/Selendang\\\">selendang</a>&nbsp;atau&nbsp;<a title=\\\"Sarung\\\" href=\\\"https://id.wikipedia.org/wiki/Sarung\\\">sarung</a>&nbsp;saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal,&nbsp;<a title=\\\"Ikat pinggang\\\" href=\\\"https://id.wikipedia.org/wiki/Ikat_pinggang\\\">ikat pinggang</a>,&nbsp;<a title=\\\"Tas\\\" href=\\\"https://id.wikipedia.org/wiki/Tas\\\">tas</a>,&nbsp;<a title=\\\"Pakaian\\\" href=\\\"https://id.wikipedia.org/wiki/Pakaian\\\">pakaian</a>, alas meja,&nbsp;<a title=\\\"Dasi\\\" href=\\\"https://id.wikipedia.org/wiki/Dasi\\\">dasi</a>,&nbsp;<a title=\\\"Dompet\\\" href=\\\"https://id.wikipedia.org/wiki/Dompet\\\">dompet</a>, dan&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Gorden\\\" href=\\\"https://id.wikipedia.org/wiki/Gorden\\\">gorden</a>.</p>'),
(2, 'Baju Model Dress Up Ulos Mangiring', 'baju-model-dress-up-ulos-mangiring-2', 1, 2, 'https://storage.googleapis.com/hijup-production-sg-magazine/2020/03/2-5.png', '<p style=\\\"text-align: justify;\\\"><strong>Ulos</strong>&nbsp;atau sering juga disebut&nbsp;<strong>kain ulos</strong>&nbsp;adalah salah satu busana khas Indonesia. Ulos secara turun temurun dikembangkan oleh masyarakat&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Batak\\\" href=\\\"https://id.wikipedia.org/wiki/Batak\\\">Batak</a>,&nbsp;<a title=\\\"Sumatra Utara\\\" href=\\\"https://id.wikipedia.org/wiki/Sumatra_Utara\\\">Sumatra Utara</a>. Dari bahasa asalnya, ulos berarti&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Kain\\\" href=\\\"https://id.wikipedia.org/wiki/Kain\\\">kain</a>. Cara membuat ulos serupa dengan cara membuat&nbsp;<a title=\\\"Songket\\\" href=\\\"https://id.wikipedia.org/wiki/Songket\\\">songket</a>&nbsp;khas&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Palembang\\\" href=\\\"https://id.wikipedia.org/wiki/Palembang\\\">Palembang</a>, yaitu menggunakan&nbsp;<a title=\\\"Alat tenun bukan mesin\\\" href=\\\"https://id.wikipedia.org/wiki/Alat_tenun_bukan_mesin\\\">alat tenun bukan mesin</a>.</p></br></br><p style=\\\"text-align: justify;\\\">Warna dominan pada ulos adalah&nbsp;<a title=\\\"Merah\\\" href=\\\"https://id.wikipedia.org/wiki/Merah\\\">merah</a>,&nbsp;<a title=\\\"Hitam\\\" href=\\\"https://id.wikipedia.org/wiki/Hitam\\\">hitam</a>, dan&nbsp;<a title=\\\"Putih\\\" href=\\\"https://id.wikipedia.org/wiki/Putih\\\">putih</a>&nbsp;yang dihiasi oleh ragam tenunan dari&nbsp;<a title=\\\"Benang\\\" href=\\\"https://id.wikipedia.org/wiki/Benang\\\">benang</a>&nbsp;emas atau perak. Mulanya ulos dikenakan di dalam bentuk&nbsp;<a title=\\\"Selendang\\\" href=\\\"https://id.wikipedia.org/wiki/Selendang\\\">selendang</a>&nbsp;atau&nbsp;<a title=\\\"Sarung\\\" href=\\\"https://id.wikipedia.org/wiki/Sarung\\\">sarung</a>&nbsp;saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal,&nbsp;<a title=\\\"Ikat pinggang\\\" href=\\\"https://id.wikipedia.org/wiki/Ikat_pinggang\\\">ikat pinggang</a>,&nbsp;<a title=\\\"Tas\\\" href=\\\"https://id.wikipedia.org/wiki/Tas\\\">tas</a>,&nbsp;<a title=\\\"Pakaian\\\" href=\\\"https://id.wikipedia.org/wiki/Pakaian\\\">pakaian</a>, alas meja,&nbsp;<a title=\\\"Dasi\\\" href=\\\"https://id.wikipedia.org/wiki/Dasi\\\">dasi</a>,&nbsp;<a title=\\\"Dompet\\\" href=\\\"https://id.wikipedia.org/wiki/Dompet\\\">dompet</a>, dan&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Gorden\\\" href=\\\"https://id.wikipedia.org/wiki/Gorden\\\">gorden</a>.</p>');

-- --------------------------------------------------------

--
-- Struktur dari tabel `weaving`
--

CREATE TABLE `weaving` (
  `id` int(11) NOT NULL,
  `weaving_name` varchar(50) NOT NULL,
  `weaving_slug` varchar(50) NOT NULL,
  `weaving_etnik` varchar(10) NOT NULL,
  `weaving_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `weaving`
--

INSERT INTO `weaving` (`id`, `weaving_name`, `weaving_slug`, `weaving_etnik`, `weaving_desc`) VALUES
(1, 'Ulos', 'ulos', 'Batak', '<p style=\\\"text-align: justify;\\\"><strong>Ulos</strong>&nbsp;atau sering juga disebut&nbsp;<strong>kain ulos</strong>&nbsp;adalah salah satu busana khas Indonesia. Ulos secara turun temurun dikembangkan oleh masyarakat&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Batak\\\" href=\\\"https://id.wikipedia.org/wiki/Batak\\\">Batak</a>,&nbsp;<a title=\\\"Sumatra Utara\\\" href=\\\"https://id.wikipedia.org/wiki/Sumatra_Utara\\\">Sumatra Utara</a>. Dari bahasa asalnya, ulos berarti&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Kain\\\" href=\\\"https://id.wikipedia.org/wiki/Kain\\\">kain</a>. Cara membuat ulos serupa dengan cara membuat&nbsp;<a title=\\\"Songket\\\" href=\\\"https://id.wikipedia.org/wiki/Songket\\\">songket</a>&nbsp;khas&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Palembang\\\" href=\\\"https://id.wikipedia.org/wiki/Palembang\\\">Palembang</a>, yaitu menggunakan&nbsp;<a title=\\\"Alat tenun bukan mesin\\\" href=\\\"https://id.wikipedia.org/wiki/Alat_tenun_bukan_mesin\\\">alat tenun bukan mesin</a>.</p></br></br><p style=\\\"text-align: justify;\\\">Warna dominan pada ulos adalah&nbsp;<a title=\\\"Merah\\\" href=\\\"https://id.wikipedia.org/wiki/Merah\\\">merah</a>,&nbsp;<a title=\\\"Hitam\\\" href=\\\"https://id.wikipedia.org/wiki/Hitam\\\">hitam</a>, dan&nbsp;<a title=\\\"Putih\\\" href=\\\"https://id.wikipedia.org/wiki/Putih\\\">putih</a>&nbsp;yang dihiasi oleh ragam tenunan dari&nbsp;<a title=\\\"Benang\\\" href=\\\"https://id.wikipedia.org/wiki/Benang\\\">benang</a>&nbsp;emas atau perak. Mulanya ulos dikenakan di dalam bentuk&nbsp;<a title=\\\"Selendang\\\" href=\\\"https://id.wikipedia.org/wiki/Selendang\\\">selendang</a>&nbsp;atau&nbsp;<a title=\\\"Sarung\\\" href=\\\"https://id.wikipedia.org/wiki/Sarung\\\">sarung</a>&nbsp;saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal,&nbsp;<a title=\\\"Ikat pinggang\\\" href=\\\"https://id.wikipedia.org/wiki/Ikat_pinggang\\\">ikat pinggang</a>,&nbsp;<a title=\\\"Tas\\\" href=\\\"https://id.wikipedia.org/wiki/Tas\\\">tas</a>,&nbsp;<a title=\\\"Pakaian\\\" href=\\\"https://id.wikipedia.org/wiki/Pakaian\\\">pakaian</a>, alas meja,&nbsp;<a title=\\\"Dasi\\\" href=\\\"https://id.wikipedia.org/wiki/Dasi\\\">dasi</a>,&nbsp;<a title=\\\"Dompet\\\" href=\\\"https://id.wikipedia.org/wiki/Dompet\\\">dompet</a>, dan&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Gorden\\\" href=\\\"https://id.wikipedia.org/wiki/Gorden\\\">gorden</a>.</p>');

-- --------------------------------------------------------

--
-- Struktur dari tabel `weaving_category`
--

CREATE TABLE `weaving_category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `weaving_category_slug` varchar(50) NOT NULL,
  `weaving_id` int(11) NOT NULL,
  `desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `weaving_category`
--

INSERT INTO `weaving_category` (`id`, `name`, `weaving_category_slug`, `weaving_id`, `desc`) VALUES
(1, 'Bintang Maratur', 'bintang-maratur-1', 1, '<p style=\\\"text-align: justify;\\\"><strong>Ulos</strong>&nbsp;atau sering juga disebut&nbsp;<strong>kain ulos</strong>&nbsp;adalah salah satu busana khas Indonesia. Ulos secara turun temurun dikembangkan oleh masyarakat&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Batak\\\" href=\\\"https://id.wikipedia.org/wiki/Batak\\\">Batak</a>,&nbsp;<a title=\\\"Sumatra Utara\\\" href=\\\"https://id.wikipedia.org/wiki/Sumatra_Utara\\\">Sumatra Utara</a>. Dari bahasa asalnya, ulos berarti&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Kain\\\" href=\\\"https://id.wikipedia.org/wiki/Kain\\\">kain</a>. Cara membuat ulos serupa dengan cara membuat&nbsp;<a title=\\\"Songket\\\" href=\\\"https://id.wikipedia.org/wiki/Songket\\\">songket</a>&nbsp;khas&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Palembang\\\" href=\\\"https://id.wikipedia.org/wiki/Palembang\\\">Palembang</a>, yaitu menggunakan&nbsp;<a title=\\\"Alat tenun bukan mesin\\\" href=\\\"https://id.wikipedia.org/wiki/Alat_tenun_bukan_mesin\\\">alat tenun bukan mesin</a>.</p></br></br><p style=\\\"text-align: justify;\\\">Warna dominan pada ulos adalah&nbsp;<a title=\\\"Merah\\\" href=\\\"https://id.wikipedia.org/wiki/Merah\\\">merah</a>,&nbsp;<a title=\\\"Hitam\\\" href=\\\"https://id.wikipedia.org/wiki/Hitam\\\">hitam</a>, dan&nbsp;<a title=\\\"Putih\\\" href=\\\"https://id.wikipedia.org/wiki/Putih\\\">putih</a>&nbsp;yang dihiasi oleh ragam tenunan dari&nbsp;<a title=\\\"Benang\\\" href=\\\"https://id.wikipedia.org/wiki/Benang\\\">benang</a>&nbsp;emas atau perak. Mulanya ulos dikenakan di dalam bentuk&nbsp;<a title=\\\"Selendang\\\" href=\\\"https://id.wikipedia.org/wiki/Selendang\\\">selendang</a>&nbsp;atau&nbsp;<a title=\\\"Sarung\\\" href=\\\"https://id.wikipedia.org/wiki/Sarung\\\">sarung</a>&nbsp;saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal,&nbsp;<a title=\\\"Ikat pinggang\\\" href=\\\"https://id.wikipedia.org/wiki/Ikat_pinggang\\\">ikat pinggang</a>,&nbsp;<a title=\\\"Tas\\\" href=\\\"https://id.wikipedia.org/wiki/Tas\\\">tas</a>,&nbsp;<a title=\\\"Pakaian\\\" href=\\\"https://id.wikipedia.org/wiki/Pakaian\\\">pakaian</a>, alas meja,&nbsp;<a title=\\\"Dasi\\\" href=\\\"https://id.wikipedia.org/wiki/Dasi\\\">dasi</a>,&nbsp;<a title=\\\"Dompet\\\" href=\\\"https://id.wikipedia.org/wiki/Dompet\\\">dompet</a>, dan&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Gorden\\\" href=\\\"https://id.wikipedia.org/wiki/Gorden\\\">gorden</a>.</p>'),
(2, 'Mangiring', 'mangiring-2', 1, '<p style=\\\"text-align: justify;\\\"><strong>Ulos</strong>&nbsp;atau sering juga disebut&nbsp;<strong>kain ulos</strong>&nbsp;adalah salah satu busana khas Indonesia. Ulos secara turun temurun dikembangkan oleh masyarakat&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Batak\\\" href=\\\"https://id.wikipedia.org/wiki/Batak\\\">Batak</a>,&nbsp;<a title=\\\"Sumatra Utara\\\" href=\\\"https://id.wikipedia.org/wiki/Sumatra_Utara\\\">Sumatra Utara</a>. Dari bahasa asalnya, ulos berarti&nbsp;<a class=\\\"mw-disambig\\\" title=\\\"Kain\\\" href=\\\"https://id.wikipedia.org/wiki/Kain\\\">kain</a>. Cara membuat ulos serupa dengan cara membuat&nbsp;<a title=\\\"Songket\\\" href=\\\"https://id.wikipedia.org/wiki/Songket\\\">songket</a>&nbsp;khas&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Palembang\\\" href=\\\"https://id.wikipedia.org/wiki/Palembang\\\">Palembang</a>, yaitu menggunakan&nbsp;<a title=\\\"Alat tenun bukan mesin\\\" href=\\\"https://id.wikipedia.org/wiki/Alat_tenun_bukan_mesin\\\">alat tenun bukan mesin</a>.</p></br></br><p style=\\\"text-align: justify;\\\">Warna dominan pada ulos adalah&nbsp;<a title=\\\"Merah\\\" href=\\\"https://id.wikipedia.org/wiki/Merah\\\">merah</a>,&nbsp;<a title=\\\"Hitam\\\" href=\\\"https://id.wikipedia.org/wiki/Hitam\\\">hitam</a>, dan&nbsp;<a title=\\\"Putih\\\" href=\\\"https://id.wikipedia.org/wiki/Putih\\\">putih</a>&nbsp;yang dihiasi oleh ragam tenunan dari&nbsp;<a title=\\\"Benang\\\" href=\\\"https://id.wikipedia.org/wiki/Benang\\\">benang</a>&nbsp;emas atau perak. Mulanya ulos dikenakan di dalam bentuk&nbsp;<a title=\\\"Selendang\\\" href=\\\"https://id.wikipedia.org/wiki/Selendang\\\">selendang</a>&nbsp;atau&nbsp;<a title=\\\"Sarung\\\" href=\\\"https://id.wikipedia.org/wiki/Sarung\\\">sarung</a>&nbsp;saja, kerap digunakan pada perhelatan resmi atau upacara adat Batak, tetapi kini banyak dijumpai di dalam bentuk produk suvenir, sarung bantal,&nbsp;<a title=\\\"Ikat pinggang\\\" href=\\\"https://id.wikipedia.org/wiki/Ikat_pinggang\\\">ikat pinggang</a>,&nbsp;<a title=\\\"Tas\\\" href=\\\"https://id.wikipedia.org/wiki/Tas\\\">tas</a>,&nbsp;<a title=\\\"Pakaian\\\" href=\\\"https://id.wikipedia.org/wiki/Pakaian\\\">pakaian</a>, alas meja,&nbsp;<a title=\\\"Dasi\\\" href=\\\"https://id.wikipedia.org/wiki/Dasi\\\">dasi</a>,&nbsp;<a title=\\\"Dompet\\\" href=\\\"https://id.wikipedia.org/wiki/Dompet\\\">dompet</a>, dan&nbsp;<a class=\\\"mw-redirect\\\" title=\\\"Gorden\\\" href=\\\"https://id.wikipedia.org/wiki/Gorden\\\">gorden</a>.</p>');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`,`product_slug`);

--
-- Indeks untuk tabel `weaving`
--
ALTER TABLE `weaving`
  ADD PRIMARY KEY (`id`,`weaving_slug`);

--
-- Indeks untuk tabel `weaving_category`
--
ALTER TABLE `weaving_category`
  ADD PRIMARY KEY (`id`,`weaving_category_slug`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `weaving`
--
ALTER TABLE `weaving`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `weaving_category`
--
ALTER TABLE `weaving_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
