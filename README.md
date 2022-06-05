# Tenunsantara Backend Dengan Express JS
Pembuatan Restfull API Project Tenunsantara

## ATTENTION
* Menampilkan data produk sudah bisa berdasarkan request doc api produc dan dapat melakukan CRUD
* Udah ada endpoint ke weaving dan weaving_category untuk jaga-jaga saja, semisal tidak diperlukan akan dihapus
* CRUD tabel weaving tinggal proses Delete data saja belum lengkap (tinggal delete data tabel product dan tabel weaving_category berdasarkan id weaving yang dihapus)
* CRUD tabel weaving_category tinggal proses Delete data yang belum lengkap (tinggal delete data tabel product berdasarkan id weaving_category)
* 2 model : *model-motif.js* dan *model-weaving.js* querynya sedikit membuat lelet karena digunakan untuk melakukan validasi input, update dan delete data
* *Target Deadline :* Tanggal 30 atau 31 May sudah selesai

## Persiapan
  * nodejs pada device
  * database mysql (xampp)

## Dependensi
Adapun dependency yang diinstall sebagai berikut:
  * Express
  * Body-parser
  * MySQL
  * Nodemon

## Skeleton
Untuk memudahkan dalam pengerjaan projek ini ini, silahkan ikuti susunan berikut

### Folder src
  * **config**
    - *database.js* - File ini berisi konfigurasi untuk meng-koneksikan Node.js ke database
  * **controllers**
    - *controller-motif.js* - File ini digunakan untuk mengelola routing tabel weaving_category
    - *controller-product.js* - File ini digunakan untuk mengelola routing tabel products
    - *controller-weaving.js* - File ini digunakan untuk mengelola routing tabel weaving
    - *index.js* - File ini digunakan untuk menginisialisasikan controller yang digunakan dari *controller-product.js* , *controller-weaving.js* dan *controller-motif.js*
  * **models**
    - *model-motif.js* - File ini digunakan untuk mengelola tabel weaving_category di database dan terkoneksi ke *controllers/controller-motif.js*
    - *model-product.js* - File ini digunakan untuk mengelola tabel products di database dan terkoneksi ke *controllers/controller-product.js*
    - *model-weaving.js* - File ini digunakan untuk mengelola tabel weaving di database dan terkoneksi ke *controllers/controller-weaving.js*
  * **routes**
    - *route.js* - File route ini memanggil *controller/index.js* bertugas untuk menentukan end point dari REST API

### app.js
File ini merupakan file induk yang akan pertama kali di eksekusi ketika aplikasi ini dijalankan

### app.yaml
File ini untuk mendeskripsikan **runtime nodejs16** saat di deploy ke App Engine

### Menjalankan Program
Pastikan device dapat terhubung ke localhost dan jalankan server Node.js dengan mengetikan perintah *npm run start* pada terminal.

## Endpoint
Sesuai dengan Request Mas Naufal pada doc api produc, Endpoint berikut digunakan untuk menapilkan list produk tenun:
  1. *GET : localhost:8000/api/products* - Menampilkan list produk (jenis tenun, kategori random)
  2. *GET : localhost:8000/api/products/ulos* - Menampilkan list produk berdasarkan {weaving_slug} atau {weaving_name}
  3. *GET : localhost:8000/api/products/ulos/mangiring-2* - Menampilkan list produk berdasarkan {weaving_category_slug} atau {weaving_category}
  4. *GET : localhost:8000/api/product/{product_slug}* - Menampilkan detail produk tenun

Adapun Endpoint yang baru ditambahkan untuk jaga-jaga dan masih akan dikembangkan diantaranya :
  1. **Tenun Atau Tabel weaving**
      - *GET : localhost:8000/api/weavings/* - Menampilkan List Tenun
      - *GET : localhost:8000/api/weaving/{weaving_slug}* - Menampilkan Detail Tenun
      - *POST : localhost:8000/api/weavings/add* - Menambahkan Data Tenun
      - *PUT : localhost:8000/api/weaving/edit/{weaving_slug}* - Mengubah Data Tenun
      - *DELETE : localhost:8000/api/weaving/delete/{weaving_slug}* - Menghapus Data Tenun (Belum termasuk delete tabel product dan weaving_category yang terhubung berdasarkan id weaving)
  2. **Motif Atau Tabel weaving_slug**
      - *GET : localhost:8000/api/motifs* - Menampilkan List waving_category
      - *GET : localhost:8000/api/motif/{weaving_category_slug}* - Menampilkan List waving_category Berdasarkan {weaving_category_slug}
      - *GET : localhost:8000/api/motifs/{weaving_slug}* - Menampilkan List weaving_category Berdasarkan (weaving_slug)
      - *POST : localhost:8000/api/motifs/add* - Menambahkan Data weaving_category
      - *PUT : localhost:8000/api/motifs/edit/:{weaving_category_slug}* - Mengubah Data weaving_category
      - *DELETE : localhost:8000/api/motif/delete/:{weaving_category_slug}* - Menghapus Data weaving_category (Belum termasuk delete data produk berdasarkan id weaving_category)
  3. **Product**
      - *POST localhost:8000/api/product/add* - Menambahkan Data product
      - *PUT localhost:8000/api/product/edit/:{product_slug}* - Update Data product Berdasarkan product_slug
      - *DELETE localhost:8000/api/product/delete/:{product_slug}* - Hapus Data product Berdasarkan product_slug
