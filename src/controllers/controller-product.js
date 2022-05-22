const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

// Ambil semua data product
const getDataProduct = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(
            `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, name, weaving_category_slug FROM weaving
            LEFT JOIN products ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            ;`,

            function (error, results) {
                if (error) throw error;

                const response = [];

                results.forEach(item => {
                    response.push({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        weaving: {
                            id: item.weaving_id,
                            weaving_name: item.weaving_name,
                            weaving_etnik: item.weaving_etnik,
                            weaving_category: item.name,
                            _links: {
                                detail: `product/${item.product_slug}`,
                                products_weaving: `product/${item.weaving_slug}`,
                                products_weaving_category: `product/${item.weaving_slug}/${item.weaving_category_slug}`,
                                wiki: `https://id.wikipedia.org/wiki/${item.weaving_name}`
                            }
                        }
                    })
                })

                res.status(200).json({
                    response_code: '200',
                    response_desc: 'Products fetched successfully',
                    success: true,
                    data: response
                });
            }
        );
        connection.release();
    })
}

// Ambil semua data product berdasarkan {product_slug} / {product_slug}
const getDataProductBySlug = (req, res) => {
    pool.getConnection(function (err, connection) {

        if (err) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong!',
                data: err
            });
        };

        connection.query(
            `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, name, weaving_category_slug FROM weaving
            LEFT JOIN products ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE products.product_slug = ?
            ;`,
            [req.params.product_slug],

            function (error, results) {
                // if (error) throw error;
                if (results.length < 1) {
                    return res.redirect(`/products`);
                }

                const response = [];

                results.forEach(item => {
                    response.push({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        weaving: {
                            id: item.weaving_id,
                            weaving_name: item.weaving_name,
                            weaving_etnik: item.weaving_etnik,
                            weaving_category: item.name,
                            _links: {
                                detail: `product/${item.product_slug}`,
                                products_weaving: `product/${item.weaving_slug}`,
                                products_weaving_category: `product/${item.weaving_slug}/${item.weaving_category_slug}`,
                                wiki: `https://id.wikipedia.org/wiki/${item.weaving_name}`
                            }
                        }
                    })
                })

                res.status(200).json({
                    response_code: '200',
                    response_desc: 'Products fetched successfully',
                    success: true,
                    data: response
                });
            }

        );
        connection.release();
    })
}

// Ambil semua data product berdasarkan {weaving_name} / {weaving_slug}
const getDataProductByWeavingName = (req, res) => {
    pool.getConnection(function (err, connection) {

        if (err) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong!',
                data: err
            });
        };

        connection.query(
            `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, name, weaving_category_slug FROM weaving
            LEFT JOIN products ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE weaving.weaving_slug = ?
            ;`,
            [req.params.weaving_slug],

            function (error, results) {
                // if (error) throw error;
                if (results.length < 1) {
                    return res.redirect(`/products`);
                }

                const response = [];

                results.forEach(item => {
                    response.push({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        weaving: {
                            id: item.weaving_id,
                            weaving_name: item.weaving_name,
                            weaving_etnik: item.weaving_etnik,
                            weaving_category: item.name,
                            _links: {
                                detail: `product/${item.product_slug}`,
                                products_weaving: `product/${item.weaving_slug}`,
                                products_weaving_category: `product/${item.weaving_slug}/${item.weaving_category_slug}`,
                                wiki: `https://id.wikipedia.org/wiki/${item.weaving_name}`
                            }
                        }
                    })
                })

                res.status(200).json({
                    response_code: '200',
                    response_desc: 'Products fetched successfully',
                    success: true,
                    data: response
                });
            }

        );
        connection.release();
    })
}


const getDataProductByWeavingCategory = (req, res) => {
    // const weaving_slug = req.params.weaving_slug
    // const weaving_category_slug = req.params.weaving_category_slug

    pool.getConnection(function (err, connection) {

        if (err) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong!',
                data: err
            });
        };

        connection.query(
            `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, name, weaving_category_slug FROM weaving
            LEFT JOIN products ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE weaving.weaving_slug = ? AND weaving_category.weaving_category_slug = ?
            ;`,
            [req.params.weaving_slug, req.params.weaving_category_slug],

            function (error, results) {
                // if (error) throw error;
                if (results.length < 1) {
                    return res.redirect(`/products/${req.params.weaving_slug}`);
                }

                const response = [];

                results.forEach(item => {
                    response.push({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        weaving: {
                            id: item.weaving_id,
                            weaving_name: item.weaving_name,
                            weaving_etnik: item.weaving_etnik,
                            weaving_category: item.name,
                            _links: {
                                detail: `product/${item.product_slug}`,
                                products_weaving: `product/${item.weaving_slug}`,
                                products_weaving_category: `product/${item.weaving_slug}/${item.weaving_category_slug}`,
                                wiki: `https://id.wikipedia.org/wiki/${item.weaving_name}`
                            }
                        }
                    })
                })

                res.status(200).json({
                    response_code: '200',
                    response_desc: 'Products fetched successfully',
                    success: true,
                    data: response
                });
            }
        );
        connection.release();
    })
}

module.exports = {
    getDataProduct,
    getDataProductBySlug,
    getDataProductByWeavingName,
    getDataProductByWeavingCategory
}