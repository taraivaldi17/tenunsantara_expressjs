# Tenunsantara Backend Dengan Express JS
Pembuatan Restfull API Project Tenunsantara

## ATTENTION
* Projek masih dalam tahap perkambangan, URL untuk mengakses detail produk tenun (*localhost:8000/products/{product_slug}*) masih belum dijalankan karena bentrok dengan url localhost:8000/products/{weaving_slug}.
* Data tabel weaving dan weaving_category sudah cukup (mau ditambahkan silahkan) tinggal tabel products kurang lengkap, menyesuaikan dengan data di tabel weaving_category dan weaving



## Persiapan
  * nodejs pada device
  * database mysql (xampp)

## Dependensi
Adapun dependency yang diinstall sebagai berikut:
  * Express
  * MySQL
  * Nodemon

## Skeleton
Untuk memudahkan dalam pengerjaan projek ini ini, silahkan ikuti susunan berikut

### Folder src
  * **config**
    - *config.js* - File ini berisi konfigurasi untuk meng-koneksikan Node.js ke database
  * **controllers**
    - *controller-product.js* - File ini digunakan untuk mengelola tabel products di database
    - *controller-weaving.js* - Sama kayak *controller-product.js* cuma ini untuk tabel weaving
    - *index.js* - File ini digunakan untuk menginisialisasikan controller yang digunakan dari *controller-product.js* dan *controller-weaving.js*
  * **routes**
    - *route.js* - File route ini memanggil *controller/index.js* bertugas untuk menentukan end point dari REST API

### App.js
File ini merupakan file induk yang akan pertama kali di eksekusi ketika aplikasi ini kamu jalankan

## Menjalankan Program
Pastikan device dapat terhubung ke localhost dan jalankan server Node.js dengan mengetikan perintah *npm run start* pada terminal.
Buka URL localhost:8000/products

## Endpoint
Sesuai dengan Request Mas Naufal pada doc api produc, Endpoint berikut digunakan untuk menapilkan list produk tenun:
  1. *localhost:8000/products* - Menampilkan list produk (jenis tenun, kategori random)
  2. *localhost:8000/products/ulos* - Menampilkan list produk berdasarkan {weaving_slug} atau {weaving_name}
  3. *localhost:8000/products/ulos/mangiring-2* - Menampilkan list produk berdasarkan {weaving_category_slug} atau {weaving_category}
  4. *localhost:8000/products/{product_slug}* - Menampilkan detail produk tenun (btw masih belum berjerja karena bentrok sama url localhost:8000/products/ulos}
