const router = require('express').Router();
const {
    tenun,
    product,
    motif
} = require('../controllers');

//----------------------- Routing Data Product -----------------------//

router.get('/products', product.getDataProduct);

router.get('/product/:product_slug', product.getDataProductByDetail);

router.get('/products/:weaving_slug', product.getDataProductByWeaving);

router.get('/products/:weaving_slug/:weaving_category_slug', product.getDataProductByWeavingCategory);

router.post('/product/add', product.insertDataProduct);

router.put('/product/edit/:product_slug', product.updateDataProduct);

router.delete('/product/delete/:product_slug', product.deleteDataProduct);

//----------------------- Routing Data Tenun -----------------------//

router.get('/weavings', tenun.getDataTenun);

router.get('/weaving/:weaving_slug', tenun.getDataTenunByWeaving_slug);

router.post('/weavings/add', tenun.addDataTenun);

router.put('/weaving/edit/:weaving_slug', tenun.editDataTenun);

router.delete('/weaving/delete/:weaving_slug', tenun.deleteDataTenun);

// ----------------------- Routing Data Motif -----------------------//

router.get('/motifs', motif.getDataMotif);

router.get('/motif/:weaving_category_slug', motif.getDataMotifBySlug);

router.get('/motifs/:weaving_slug', motif.getDataMotifByWeavingSlug);

router.post('/motifs/add', motif.addDataMotif);

router.put('/motif/edit/:weaving_category_slug', motif.editDataMotif);

router.delete('/motif/delete/:weaving_category_slug', motif.deleteDataMotif);

module.exports = router;