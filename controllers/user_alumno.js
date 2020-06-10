const express = require('express');
const router = express.Router();
const pool = require('../database');
const controller = {};

controller.list_users_api = async(req, res) => {
    pool.query("SELECT NoControl, Nombre from alumno ", (err, alumno) => {
        if (err) {
            res.json(err);
        }
        res.json({
            data: alumno
        })
    });
};



module.exports = controller;