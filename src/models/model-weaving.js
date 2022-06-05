const koneksi = require('../configs/database');

const getWeaving = (res, statement) => {
    koneksi.query(statement, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to get weaving!',
            });
        }
        const response = [];
        results.forEach(item => {
            response.push({
                id: item.id,
                weaving_name: item.weaving_name,
                weaving_slug: item.weaving_slug,
                weaving_etnik: item.weaving_etnik,
                weaving_desc: item.weaving_desc,
            })
        });

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Weaving fetched successfully!',
            success: true,
            data: response
        });
    });
};

const getWeavingByWeavingSlug = (res, searchStatement, weaving_slug) => {
    koneksi.query(searchStatement, weaving_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to get weaving!',
            });
        }

        if (results.length) {
            const response = [];
            results.forEach(item => {
                response.push({
                    id: item.id,
                    weaving_name: item.weaving_name,
                    weaving_slug: item.weaving_slug,
                    weaving_etnik: item.weaving_etnik,
                    weaving_desc: item.weaving_desc,
                })
            });

            return res.status(200).json({
                response_code: 200,
                response_desc: 'Weaving fetched successfully!',
                success: true,
                data: response
            });
        } else {
            return res.status(404).json({
                response_code: 404,
                response_desc: 'Weaving not found!',
                success: false,
            });
        }
    });
}

const insertWeaving = (res, statement, values) => {
    koneksi.query(statement, values, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to insert weaving!',
            });
        }

        return res.status(201).json({
            response_code: '201',
            response_desc: 'Weaving added successfully',
            success: true,
        });
    });
}

const updateWeaving = (res, updateStatement, values, weaving_slug) => {
    koneksi.query(updateStatement, [values, weaving_slug], (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to update weaving!',
            });
        }

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Weaving updated successfully',
            success: true,
        });
    });
}

const deleteWeaving = (res, deleteStatement, weaving_slug) => {
    koneksi.query(deleteStatement, weaving_slug, (err, results) => {
        if (err) {
            return res.status(500).json({
                response_code: 500,
                response_desc: 'Failed to delete weaving!',
            });
        }

        return res.status(200).json({
            response_code: 200,
            response_desc: 'Weaving deleted successfully',
            success: true,
        });
    });
}

module.exports = {
    getWeaving,
    insertWeaving,
    updateWeaving,
    deleteWeaving,
    getWeavingByWeavingSlug
}