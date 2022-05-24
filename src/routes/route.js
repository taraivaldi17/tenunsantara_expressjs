const router = require('express').Router();
const {
    tenun,
    product
} = require('../controllers');

//----------------------- Routing Data Product -----------------------//
// GET localhost:8000/products => Ambil semua data product
router.get('/api/products', product.getDataProduct);

router.get('/api/products/:detail', product.getDetailProduct);

// GET localhost:8000/products/{weaving_slug} => Menampilkan semua data product berdasarkan {weaving_name} / {weaving_slug}
// router.get('/api/products/:weaving_slug', product.getDataProductByWeavingName);

// GET localhost:8000/products/{product_slug} => Menampilkan detail produk berdasarkan {product_slug}
// router.get('/api/products/:product_slug', product.getDataProductBySlug);

// GET localhost:8000/products/{weaving_slug}/{weaving_category_slug}, - Menampilkan list produk berdasarkan {weaving_name}
router.get('/api/products/:weaving_slug/:weaving_category_slug', product.getDataProductByWeavingCategory);

//----------------------- Routing Data Tenun -----------------------//
// GET localhost:8000/ => Ambil semua data tenun
// router.get('/', tenun.getDataTenun);

// GET localhost:8000/tenun => Ambil semua data tenun
// router.get('/tenun', tenun.getDataTenun);

// GET localhost:8000/tenun/{id} => Ambil semua data tenun berdasarkan {id}
// router.get('/tenun/:id', tenun.getDatatenunByID);

// POST localhost:8000/tenun/add => Tambah data tenun ke database
// router.post('/tenun/add', tenun.addDatatenun);

// PUT localhost:8000/tenun/2 => Edit data tenun
// router.put('/tenun/edit', tenun.editDatatenun);

// DELETE localhost:8000/tenun/delete => Delete data tenun
// router.delete('/tenun/delete/', tenun.deleteDatatenun);

module.exports = router;