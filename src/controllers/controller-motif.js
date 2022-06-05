const {
    getWeavingCategory,
    getWeavingCategoryBySlug,
    getWeavingCategoryByWeaving,
    insertWeavingCategory,
    updateWeavingCategory,
    deleteWeavingCategory,
} = require('../models/model-motif');

const getDataMotif = (req, res) => {
    const querySearch = `SELECT * FROM weaving_category`;
    getWeavingCategory(res, querySearch);
}

const getDataMotifBySlug = (req, res) => {
    const querySearch = `SELECT * FROM weaving_category WHERE weaving_category_slug = ?`;
    getWeavingCategoryBySlug(res, querySearch, req.params.weaving_category_slug);
}

const getDataMotifByWeavingSlug = (req, res) => {
    const querySQL = `SELECT weaving_category.id, weaving_category.name, weaving_category.weaving_category_slug, weaving_category.weaving_id, weaving_category.desc, weaving.weaving_name, weaving.weaving_etnik FROM weaving_category
    LEFT JOIN weaving ON weaving_category.weaving_id = weaving.id
    WHERE weaving.weaving_slug = ?`;
    getWeavingCategoryByWeaving(res, querySQL, req.params.weaving_slug);
}

const addDataMotif = (req, res) => {
    const data = {
        name: req.body.name,
        weaving_category_slug: req.body.name.toLowerCase().replace(/ /g, '-'),
        weaving_id: req.body.weaving_id,
        desc: req.body.desc
    }
    const queryInsert = `INSERT INTO weaving_category SET ?`;

    insertWeavingCategory(res, queryInsert, data);
}

const editDataMotif = (req, res) => {
    const data = {
        name: req.body.name,
        weaving_category_slug: req.body.name.toLowerCase().replace(/ /g, '-'),
        weaving_id: req.body.weaving_id,
        desc: req.body.desc
    }
    const queryUpdate = `UPDATE weaving_category SET ? WHERE weaving_category_slug = ?`;

    updateWeavingCategory(res, queryUpdate, data, req.params.weaving_category_slug);
}

const deleteDataMotif = (req, res) => {
    const queryDelete = `DELETE FROM weaving_category WHERE weaving_category_slug = ?`;
    deleteWeavingCategory(res, queryDelete, req.params.weaving_category_slug);
}

module.exports = {
    getDataMotif,
    getDataMotifByWeavingSlug,
    getDataMotifBySlug,
    addDataMotif,
    editDataMotif,
    deleteDataMotif
}