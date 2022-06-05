const {
    getProduct,
    getProductDetail,
    getProductWeaving,
    getProductByWeavingAndWeavingCategorySlug,
    insertProduct,
    updateProduct,
    deleteProduct
} = require('../models/model-product');

const getDataProduct = (req, res) => {
    const querySql = `
    SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, weaving_category.name, weaving_category.weaving_category_slug FROM products
    LEFT JOIN weaving ON products.weaving_id = weaving.id
    LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id            
    ;`;
    getProduct(res, querySql);
}

const getDataProductByDetail = (req, res) => {
    // res.send('Hello from get products/:product_slug');
    const searchProductSlug =
        `
            SELECT products.id, product_slug, title, image, products.desc, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, weaving.weaving_desc, weaving_category.name, weaving_category.weaving_category_slug FROM products
            LEFT JOIN weaving ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE products.product_slug = ?
        ;`;

    getProductDetail(res, searchProductSlug, req.params.product_slug);
}

const getDataProductByWeaving = (req, res) => {
    const searchWeavingName =
        `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, weaving_category.name, weaving_category.weaving_category_slug FROM products
            LEFT JOIN weaving ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE weaving.weaving_slug = ?
        ;`;

    getProductWeaving(res, searchWeavingName, req.params.weaving_slug);
}

const getDataProductByWeavingCategory = (req, res) => {
    getProductByWeavingAndWeavingCategorySlug(res, req.params.weaving_slug, req.params.weaving_category_slug);
}

const insertDataProduct = (req, res) => {
    const data = {
        title: req.body.title,
        product_slug: req.body.title.toLowerCase().replace(/ /g, '-') + '-' + Math.floor(Math.random() * 100),
        weaving_id: req.body.weaving_id,
        weaving_category_id: req.body.weaving_category_id,
        image: req.body.image,
        desc: req.body.desc
    }
    const insertQuery = `INSERT INTO products SET ?`;
    insertProduct(res, insertQuery, data);
}

const updateDataProduct = (req, res) => {
    const data = {
        title: req.body.title,
        product_slug: req.body.title.toLowerCase().replace(/ /g, '-') + '-' + Math.floor(Math.random() * 100),
        weaving_id: req.body.weaving_id,
        weaving_category_id: req.body.weaving_category_id,
        image: req.body.image,
        desc: req.body.desc
    }
    const updateQuery = `UPDATE products SET ? WHERE product_slug = ?`;
    updateProduct(res, updateQuery, data, req.params.product_slug);
}

const deleteDataProduct = (req, res) => {
    const deleteQuery = `DELETE FROM products WHERE product_slug = ?`;
    deleteProduct(res, deleteQuery, req.params.product_slug);
}

module.exports = {
    getDataProduct,
    getDataProductByDetail,
    getDataProductByWeaving,
    getDataProductByWeavingCategory,
    insertDataProduct,
    updateDataProduct,
    deleteDataProduct
}