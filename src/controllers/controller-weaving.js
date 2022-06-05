const {
    getWeaving,
    insertWeaving,
    updateWeaving,
    deleteWeaving,
    getWeavingByWeavingSlug
} = require('../models/model-weaving');

const getDataTenun = (req, res) => {
    const querySql = `SELECT * FROM weaving`;
    getWeaving(res, querySql);
}

const getDataTenunByWeaving_slug = (req, res) => {
    const querySearch = 'SELECT * FROM weaving WHERE weaving_slug = ?';
    getWeavingByWeavingSlug(res, querySearch, req.params.weaving_slug);
}

const addDataTenun = (req, res) => {
    const data = {
        weaving_name: req.body.weaving_name,
        weaving_slug: 'tenun-' + req.body.weaving_name.toLowerCase().replace(/ /g, '-') + '-' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        weaving_etnik: req.body.weaving_etnik,
        weaving_desc: req.body.weaving_desc
    };
    const queryInsert = 'INSERT INTO weaving SET ?';

    insertWeaving(res, queryInsert, data);
}

const editDataTenun = (req, res) => {
    const data = {
        weaving_name: req.body.weaving_name,
        weaving_slug: 'tenun-' + req.body.weaving_name.toLowerCase().replace(/ /g, '-') + '-' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        weaving_etnik: req.body.weaving_etnik,
        weaving_desc: req.body.weaving_desc
    }
    const queryUpdate = 'UPDATE weaving SET ? WHERE weaving_slug = ?';

    updateWeaving(res, queryUpdate, data, req.params.weaving_slug);
}

const deleteDataTenun = (req, res) => {
    const queryDelete = 'DELETE FROM weaving WHERE weaving_slug = ?';

    deleteWeaving(res, queryDelete, req.params.weaving_slug);
}

module.exports = {
    getDataTenun,
    getDataTenunByWeaving_slug,
    addDataTenun,
    editDataTenun,
    deleteDataTenun
}