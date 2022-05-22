const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

// Ambil semua data tenun
const getDataTenun = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            ` SELECT * FROM weaving;`,
            function (error, results) {
                if (error) throw error;;
                res.status(200).json({
                    success: true,
                    message: 'Berhasil ambil data!',
                    data: results
                });
            }
        );
        connection.release();
    })
}

// Ambil data tenun berdasarkan {ID}
const getDatatenunByID = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `SELECT * FROM weaving WHERE id = ?`,
            [req.params.id],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil ambil data!',
                    data: results
                });
            }
        );
        connection.release();
    })
}

// Ambil data tenun berdasarkan {weaving_name}
const getDataTenunByWeavingName = (req, res) => {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `SELECT weaving_name, weaving_etnik, weaving_category FROM weaving WHERE weaving_name = ?`,
            [req.params.weaving_name],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil ambil data!',
                    data: results
                });
            }
        );
        connection.release();
    })
}

// Simpan data tenun
const addDatatenun = (req, res) => {
    const data = {
        weaving_name: req.body.weaving_name,
        weaving_etnik: req.body.weaving_etnik,
        weaving_category: req.body.weaving_category,
        weaving_desc: req.body.weaving_desc
    }
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `INSERT INTO weaving SET ?; `, [data],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil tambah data!',
                });
            });
        connection.release();
    })
}

// Update data tenun
const editDatatenun = (req, res) => {
    const dataEdit = {
        weaving_name: req.body.weaving_name,
        weaving_etnik: req.body.weaving_etnik,
        weaving_category: req.body.weaving_category,
        weaving_desc: req.body.weaving_desc
    }
    const id = req.body.id
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `UPDATE weaving SET ? WHERE id = ?;`, [dataEdit, id],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil edit data!',
                });
            });
        connection.release();
    })
}

// Hapus data tenun
const deleteDatatenun = (req, res) => {
    const id = req.body.id
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(
            `DELETE FROM weaving WHERE id = ?;`, [id],
            function (error, results) {
                if (error) throw error;
                res.send({
                    success: true,
                    message: 'Berhasil hapus data!'
                });
            });
        connection.release();
    })
}

module.exports = {
    getDataTenun,
    getDatatenunByID,
    getDataTenunByWeavingName,
    addDatatenun,
    editDatatenun,
    deleteDatatenun,
}