const koneksi = require('../configs/database');

const getProduct = (res, statement) => {
    koneksi.query(statement, (err, results) => {
        // error handling
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to get product',
            });
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
                        detail: `/product/${item.product_slug}`,
                        products_weaving: `/products/${item.weaving_slug}`,
                        products_weaving_category: `/products/${item.weaving_slug}/${item.weaving_category_slug}`,
                        wiki: `/wiki/${item.weaving_slug}`
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
    })
}

const getProductDetail = (res, searchStatement, detail) => {
    koneksi.query(searchStatement, detail, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to get product',
            });
        }

        if (results.length) {
            const response = [];
            results.forEach(item => {
                response.push({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    desc: item.desc,
                    weaving: {
                        id: item.weaving_id,
                        weaving_name: item.weaving_name,
                        weaving_etnik: item.weaving_etnik,
                        weaving_category: item.name,
                        weaving_desc: item.weaving_desc,
                        _links: {
                            detail: `/product/${item.product_slug}`,
                            products_weaving: `/products/${item.weaving_slug}`,
                            products_weaving_category: `/products/${item.weaving_slug}/${item.weaving_category_slug}`,
                            wiki: `/wiki/${item.weaving_slug}`
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
        } else {
            return res.status(404).json({
                response_code: 404,
                response_desc: 'Product not found!',
                success: false,
            });
        }
    });
}

const getProductWeaving = (res, searchStatement, weaving_slug) => {
    koneksi.query(searchStatement, weaving_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to get product',
            });
        }

        if (results.length) {
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
                            detail: `/product/${item.product_slug}`,
                            products_weaving: `/products/${item.weaving_slug}`,
                            products_weaving_category: `/products/${item.weaving_slug}/${item.weaving_category_slug}`,
                            wiki: `/wiki/${item.weaving_slug}`
                        }
                    }
                })
            });

            res.status(200).json({
                response_code: '200',
                response_desc: 'Products fetched successfully',
                success: true,
                data: response
            });
        } else {
            return res.status(404).json({
                response_code: 404,
                response_desc: 'Product not found!',
                success: false,
            });
        }
    });
}

const getProductByWeavingAndWeavingCategorySlug = (res, param1, param2) => {
    koneksi.query(
        `
            SELECT products.id, product_slug, title, image, products.weaving_id, weaving.weaving_name, weaving.weaving_slug, weaving.weaving_etnik, weaving_category.name, weaving_category.weaving_category_slug FROM products
            LEFT JOIN weaving ON products.weaving_id = weaving.id
            LEFT JOIN weaving_category ON products.weaving_category_id = weaving_category.id
            WHERE weaving.weaving_slug = ? AND weaving_category.weaving_category_slug = ?
        ;`, [param1, param2], (err, results) => {
            if (err) {
                return res.status(500).json({
                    response_code: '500',
                    response_desc: 'Fail to get product',
                });
            }

            if (results.length) {
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
                                detail: `/product/${item.product_slug}`,
                                products_weaving: `/products/${item.weaving_slug}`,
                                products_weaving_category: `/products/${item.weaving_slug}/${item.weaving_category_slug}`,
                                wiki: `/wiki/${item.weaving_slug}`
                            }
                        }
                    })
                });

                res.status(200).json({
                    response_code: '200',
                    response_desc: 'Products fetched successfully',
                    success: true,
                    data: response
                });
            } else {
                return res.status(404).json({
                    response_code: 404,
                    response_desc: 'Product not found!',
                    success: false,
                });
            }
        });
}

const insertProduct = (res, insertStatement, values) => {
    koneksi.query(insertStatement, values, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to insert product',
            });
        }

        res.status(201).json({
            response_code: '201',
            response_desc: 'Product inserted successfully',
            success: true,
        });
    });
}

const updateProduct = (res, updateStatement, values, product_slug) => {
    koneksi.query(updateStatement, [values, product_slug], (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to update product',
            });
        }

        res.status(200).json({
            response_code: '200',
            response_desc: 'Product updated successfully',
            success: true,
        });
    });
}

const deleteProduct = (res, deleteStatement, product_slug) => {
    koneksi.query(deleteStatement, product_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: '500',
                response_desc: 'Fail to delete product',
            });
        }

        res.status(200).json({
            response_code: '200',
            response_desc: 'Product deleted successfully',
            success: true,
        });
    });
}

module.exports = {
    getProduct,
    getProductDetail,
    getProductWeaving,
    getProductByWeavingAndWeavingCategorySlug,
    insertProduct,
    updateProduct,
    deleteProduct
}