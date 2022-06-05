const koneksi = require('../configs/database');

const getWeavingCategory = (res, statement) => {
    koneksi.query(statement, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to get motif!',
            });
        }
        const response = [];
        results.forEach(item => {
            response.push({
                id: item.id,
                name: item.name,
                weaving_id: item.weaving_id,
            })
        });

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Motifs fetched successfully!',
            success: true,
            data: response
        });
    });
}

const getWeavingCategoryBySlug = (res, searchStatement, slug) => {
    koneksi.query(searchStatement, slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to get motif!',
            });
        }

        if (results.length) {
            const response = [];
            results.forEach(item => {
                response.push({
                    id: item.id,
                    name: item.name,
                    weaving_id: item.weaving_id,
                    desc: item.desc,
                })
            });

            return res.status(200).json({
                response_code: 200,
                response_desc: 'Motifs fetched successfully!',
                success: true,
                data: response
            });
        } else {
            return res.status(404).json({
                response_code: 404,
                response_desc: 'Motifs not found!',
                success: false,
            });
        }
    });
}

const getWeavingCategoryByWeaving = (res, searchStatement, weaving_slug) => {
    koneksi.query(searchStatement, weaving_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to get motif!',
            });
        }

        if (results.length) {
            const response = [];
            results.forEach(item => {
                response.push({
                    id: item.id,
                    name: item.name,
                    weaving: {
                        id: item.weaving_id,
                        weaving_name: item.weaving_name,
                        weaving_etnik: item.weaving_etnik,
                    }
                })
            });
            return res.status(200).json({
                response_code: 200,
                response_desc: 'Motifs fetched successfully!',
                success: true,
                data: response
            });
        } else {
            return res.status(404).json({
                response_code: 404,
                response_desc: 'Motifs not found!',
                success: false,
            });
        }
    });
}

const insertWeavingCategory = (res, statement, values) => {
    koneksi.query(statement, values, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to insert motif!',
            });
        }

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Motifs added successfully!',
            success: true,
        });
    });
}

const updateWeavingCategory = (res, statement, values, weaving_category_slug) => {
    koneksi.query(statement, [values, weaving_category_slug], (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to update motif!',
            });
        }

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Motif updated successfully!',
            success: true,
        });
    });
}

const deleteWeavingCategory = (res, deleteStatement, weaving_category_slug) => {
    koneksi.query(deleteStatement, weaving_category_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to delete motif!',
            });
        }

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Motif deleted successfully!',
            success: true,
        })
    });
}

module.exports = {
    getWeavingCategory,
    getWeavingCategoryBySlug,
    getWeavingCategoryByWeaving,
    insertWeavingCategory,
    updateWeavingCategory,
    deleteWeavingCategory
}