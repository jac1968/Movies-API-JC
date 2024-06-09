const { getAll, create, getOne, remove, update } = require('../controllers/director.controllers');
const express = require('express');

const routerDirector = express.Router();

// static routes
routerDirector.route('/')
    .get(getAll)
    .post(create);

// dynamic routes
routerDirector.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerDirector;